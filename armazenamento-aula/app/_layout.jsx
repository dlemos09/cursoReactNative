// ============================================================================
// PROJETO ARMAZENAMENTO - Demonstração de diferentes tipos de armazenamento
// ============================================================================

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Keyboard,
} from "react-native";

// Importações para diferentes tipos de armazenamento
import AsyncStorage from "@react-native-async-storage/async-storage"; // Armazenamento não sensível
import * as SecureStore from "expo-secure-store"; // Armazenamento seguro/criptografado
import * as FileSystem from "expo-file-system"; // Sistema de arquivos

import styles from "../styles/styles";

// ==================== CONSTANTES DE ARMAZENAMENTO ====================
// Chaves únicas para identificar dados no armazenamento
const NOTES_KEY = "@NOTAS"; // Chave para notas no AsyncStorage
const PIN_KEY = "user_pin"; // Chave para PIN no SecureStore

export default function App() {
  // ==================== ESTADOS DE AUTENTICAÇÃO ====================
  // Controla se o usuário já tem um PIN configurado
  const [hasPin, setHasPin] = useState(null); // null = carregando, true/false = tem/não tem PIN

  // Input do PIN que o usuário está digitando
  const [pinInput, setPinInput] = useState("");

  // Etapa atual do fluxo de PIN:
  // "enter" = digitando PIN para entrar
  // "set" = definindo novo PIN
  // "confirm" = confirmando o novo PIN
  const [pinStep, setPinStep] = useState("enter");

  // PIN temporário usado durante o processo de confirmação
  const [tempPin, setTempPin] = useState("");

  // ==================== ESTADOS DAS NOTAS ====================
  // Texto da nova nota sendo digitada
  const [nota, setNota] = useState("");

  // Array com todas as notas salvas
  const [notas, setNotas] = useState([]);

  // ==================== VERIFICAÇÃO INICIAL DO PIN ====================
  // useEffect executado na inicialização para verificar se já existe PIN salvo
  useEffect(() => {
    (async () => {
      try {
        // Tenta recuperar PIN do armazenamento seguro
        const savedPin = await SecureStore.getItemAsync(PIN_KEY);

        // Define se tem PIN baseado na existência do valor
        setHasPin(!!savedPin);

        // Define a etapa: se tem PIN vai para "enter", senão vai para "set"
        setPinStep(savedPin ? "enter" : "set");
      } catch (_error) {
        // Em caso de erro, assume que não tem PIN e permite configuração
        console.warn("Erro ao ler PIN", _error);
        setHasPin(false);
        setPinStep("set");
      }
    })();
  }, []); // Array vazio = executa apenas uma vez na montagem

  // ==================== CARREGAMENTO DAS NOTAS ====================
  // useEffect para carregar notas salvas do AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        // Busca dados das notas no AsyncStorage
        const raw = await AsyncStorage.getItem(NOTES_KEY);

        // Se encontrou dados, converte de JSON para array e atualiza estado
        if (raw) setNotas(JSON.parse(raw));
      } catch (_error) {
        // Em caso de erro, mantém array vazio e registra no console
        console.warn("Erro ao carregar notas", _error);
      }
    })();
  }, []); // Executa apenas uma vez na inicialização

  // ==================== FUNÇÃO DE PERSISTÊNCIA DAS NOTAS ====================
  // Função responsável por salvar as notas no AsyncStorage
  const persistNotas = async (list) => {
    // Atualiza o estado local imediatamente
    setNotas(list);

    try {
      // Converte array para JSON e salva no AsyncStorage
      await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(list));
    } catch (_error) {
      // Em caso de erro, mostra alerta para o usuário
      Alert.alert("Erro", "Não foi possível salvar suas notas.");
    }
  };

  // ==================== ADICIONAR NOVA NOTA ====================
  // Função para adicionar uma nova nota à lista
  const addNota = () => {
    const text = nota.trim(); // Remove espaços em branco das extremidades

    // Se texto estiver vazio, não faz nada
    if (!text) return;

    // Cria objeto da nova nota com ID único (timestamp) e texto
    const nova = { id: Date.now().toString(), text };

    // Adiciona nova nota no início do array e persiste
    persistNotas([nova, ...notas]);

    // Limpa o campo de input
    setNota("");

    // Fecha o teclado
    Keyboard.dismiss();
  };

  // ==================== LIMPAR TODAS AS NOTAS ====================
  // Função para limpar todas as notas com confirmação
  const clearNotas = () => {
    Alert.alert(
      "Limpar tudo",
      "Tem certeza que deseja apagar todas as notas?",
      [
        { text: "Cancelar", style: "cancel" }, // Botão de cancelamento
        {
          text: "Apagar",
          style: "destructive", // Estilo vermelho para ação destrutiva
          onPress: async () => persistNotas([]), // Persiste array vazio
        },
      ]
    );
  };

  // ==================== BACKUP VIA FILESYSTEM ====================
  // Função para exportar backup das notas para arquivo JSON
  const exportBackup = async () => {
    try {
      // Define caminho do arquivo no diretório de documentos do app
      const path = FileSystem.documentDirectory + "notes-backup.json";

      // Escreve as notas em formato JSON no arquivo
      await FileSystem.writeAsStringAsync(path, JSON.stringify(notas), {
        encoding: FileSystem.EncodingType.UTF8,
      });

      // Confirma sucesso para o usuário com caminho do arquivo
      Alert.alert("Backup criado", `Arquivo salvo em:\n${path}`);
    } catch (_error) {
      // Em caso de erro, notifica o usuário
      Alert.alert("Erro", "Falha ao criar backup.");
    }
  };

  // ==================== VISUALIZAR BACKUP ====================
  // Função para ler e exibir conteúdo do backup diretamente no app
  const showBackup = async () => {
    try {
      // Define mesmo caminho usado no export
      const path = FileSystem.documentDirectory + "notes-backup.json";

      // Lê conteúdo do arquivo
      const content = await FileSystem.readAsStringAsync(path);

      // Exibe conteúdo em um alerta
      Alert.alert("Backup encontrado", content);
    } catch (_error) {
      // Se arquivo não existe ou erro de leitura
      Alert.alert("Erro", "Não foi possível abrir o backup.");
    }
  };

  // ==================== FLUXO DE AUTENTICAÇÃO POR PIN ====================
  // Função principal que gerencia todo o fluxo de PIN
  const handlePinSubmit = async () => {
    const code = pinInput.trim(); // Remove espaços do PIN digitado

    // Validação: PIN deve ter pelo menos 4 dígitos
    if (code.length < 4) {
      Alert.alert("PIN inválido", "Use pelo menos 4 dígitos.");
      return;
    }

    // ========== ETAPA 1: DEFININDO NOVO PIN ==========
    if (pinStep === "set") {
      // Salva PIN temporário e vai para confirmação
      setTempPin(code);
      setPinInput(""); // Limpa campo de input
      setPinStep("confirm"); // Muda para etapa de confirmação
      return;
    }

    // ========== ETAPA 2: CONFIRMANDO NOVO PIN ==========
    if (pinStep === "confirm") {
      // Verifica se os PINs coincidem
      if (code !== tempPin) {
        Alert.alert("Não confere", "Os PINs não são iguais.");
        return;
      }

      try {
        // Salva PIN no armazenamento seguro
        await SecureStore.setItemAsync(PIN_KEY, code, {
          keychainService: "appPin", // Nome do serviço no keychain
        });

        // Atualiza estados para PIN configurado
        setHasPin(true);
        setPinStep("enter");
        setPinInput("");

        Alert.alert("Pronto", "PIN configurado com sucesso.");
      } catch (_error) {
        Alert.alert("Erro", "Não foi possível salvar o PIN.");
      }
      return;
    }

    // ========== ETAPA 3: VERIFICANDO PIN EXISTENTE ==========
    // pinStep === "enter"
    try {
      // Recupera PIN salvo do armazenamento seguro
      const savedPin = await SecureStore.getItemAsync(PIN_KEY);

      // Compara PIN digitado com PIN salvo
      if (savedPin && code === savedPin) {
        setPinInput(""); // Limpa campo e libera acesso
        // Não precisa alterar outros estados - usuário está autenticado
      } else {
        Alert.alert("PIN incorreto", "Tente novamente.");
      }
    } catch (_error) {
      Alert.alert("Erro", "Falha ao verificar o PIN.");
    }
  };

  // ==================== RENDERIZAÇÃO CONDICIONAL ====================

  // ========== TELA DE CARREGAMENTO ==========
  // Exibida enquanto verifica se existe PIN salvo
  if (hasPin === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando…</Text>
      </View>
    );
  }

  // ========== TELAS DE AUTENTICAÇÃO ==========
  // Exibida quando não tem PIN ou está configurando/entrando com PIN
  if (!hasPin || pinStep !== "enter") {
    return (
      <View style={styles.container}>
        {/* Título dinâmico baseado na etapa atual */}
        <Text style={styles.title}>
          {pinStep === "set"
            ? "Crie um PIN"
            : pinStep === "confirm"
            ? "Confirme o PIN"
            : "Digite seu PIN"}
        </Text>

        {/* Campo de entrada do PIN */}
        <TextInput
          style={styles.input}
          value={pinInput}
          onChangeText={setPinInput}
          placeholder="PIN (mín. 4 dígitos)"
          keyboardType="numeric" // Teclado numérico
          secureTextEntry // Oculta caracteres digitados
          maxLength={10} // Limite de caracteres
        />

        {/* Botão de ação com texto dinâmico */}
        <TouchableOpacity style={styles.button} onPress={handlePinSubmit}>
          <Text style={styles.buttonText}>
            {pinStep === "enter" ? "Entrar" : "Salvar PIN"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ========== TELA PRINCIPAL - GERENCIADOR DE NOTAS ==========
  // Exibida após autenticação bem-sucedida
  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.title}>Minhas Notas</Text>

      {/* ========== SEÇÃO DE ADIÇÃO DE NOTAS ========== */}
      <View style={styles.row}>
        {/* Campo de input para nova nota */}
        <TextInput
          style={[styles.input, { flex: 1 }]} // flex: 1 = ocupa espaço disponível
          value={nota}
          onChangeText={setNota}
          placeholder="Escreva uma nota…"
          returnKeyType="done" // Botão "Done" no teclado
          onSubmitEditing={addNota} // Adiciona nota ao pressionar Enter
        />

        {/* Botão para adicionar nota */}
        <TouchableOpacity style={styles.button} onPress={addNota}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* ========== LISTA DE NOTAS ========== */}
      <FlatList
        data={notas} // Array de dados
        keyExtractor={(item) => item.id} // Função para extrair chave única
        contentContainerStyle={{ gap: 8, paddingVertical: 8 }} // Espaçamento entre itens
        renderItem={({ item }) => (
          // Card para cada nota
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        )}
        // Componente exibido quando lista está vazia
        ListEmptyComponent={
          <Text style={styles.muted}>Nenhuma nota ainda.</Text>
        }
      />

      {/* ========== SEÇÃO DE AÇÕES ========== */}
      <View style={styles.actions}>
        {/* Botão para limpar todas as notas */}
        <TouchableOpacity
          style={[styles.button, styles.secondary]}
          onPress={clearNotas}
        >
          <Text style={styles.buttonText}>Limpar tudo</Text>
        </TouchableOpacity>

        {/* Botão para exportar backup */}
        <TouchableOpacity
          style={[styles.button, styles.secondary]}
          onPress={exportBackup}
        >
          <Text style={styles.buttonText}>Exportar backup</Text>
        </TouchableOpacity>

        {/* Botão para visualizar backup existente */}
        <TouchableOpacity
          style={[styles.button, styles.secondary]}
          onPress={showBackup}
        >
          <Text style={styles.buttonText}>Ver Backup</Text>
        </TouchableOpacity>
      </View>

      {/* ========== RODAPÉ INFORMATIVO ========== */}
      <Text style={styles.footer}>
        Armazenamento: notas em AsyncStorage; PIN em SecureStore; backup via
        FileSystem.
      </Text>
    </View>
  );
}
