// ============================================================================
// HomeScreen.jsx - Tela principal do app de academia
// Funcionalidades: Registro de frequência, navegação para cadastro de endereço
// ============================================================================

import React, { useState, useRef } from "react";
import {
  View, // Container básico
  Text, // Componente de texto
  StyleSheet, // Sistema de estilos
  TextInput, // Campo de entrada de texto
  Button, // Botão padrão
  FlatList, // Lista otimizada para grandes datasets
  TouchableOpacity, // Área tocável customizável
  Modal, // Overlay modal
  Animated, // Sistema de animações
  Easing, // Funções de easing para animações
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones

export default function HomeScreen({ theme, navigation }) {
  // ==================== ESTADOS DO COMPONENTE ====================
  const [nome, setNome] = useState(""); // Nome do aluno a ser cadastrado
  const [frequencia, setFrequencia] = useState([]); // Lista de alunos registrados
  const [modalVisible, setModalVisible] = useState(false); // Controla visibilidade do modal
  const [itemSelecionado, setItemSelecionado] = useState(null); // Item selecionado para exclusão

  // ==================== CONTROLE DE ANIMAÇÕES ====================
  // useRef: mantém valores que não causam re-render quando alterados
  const scaleAnim = useRef(new Animated.Value(0.5)).current; // Animação de escala (tamanho)
  const opacityAnim = useRef(new Animated.Value(0)).current; // Animação de opacidade (transparência)

  // Função que inicia animações paralelas para o modal
  const iniciarAnimacao = () => {
    // Reset dos valores iniciais
    scaleAnim.setValue(0.5);
    opacityAnim.setValue(0);

    // Animações paralelas (executam simultaneamente)
    Animated.parallel([
      // Animação de escala: de 0.5 para 1 (tamanho normal)
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 250,
        easing: Easing.out(Easing.ease), // Easing suave de saída
        useNativeDriver: true, // Usa driver nativo para melhor performance
      }),
      // Animação de opacidade: de 0 para 1 (totalmente visível)
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(); // Inicia as animações
  };

  // ==================== FUNÇÕES DE NEGÓCIO ====================

  // Registra a presença de um aluno e navega para cadastro de endereço
  const registrarPresenca = () => {
    if (nome.trim() === "") return; // Valida se o nome não está vazio

    // Salvar o nome antes de limpar o estado (evita bugs de timing)
    const nomeAluno = nome.trim();

    // Cria novo registro com ID único baseado em timestamp
    const novoRegistro = { id: Date.now().toString(), nome: nomeAluno };

    // Adiciona novo registro no início da lista (spread operator)
    setFrequencia([novoRegistro, ...frequencia]);
    setNome(""); // Limpa o campo de entrada

    // Navega para tela de cadastro passando o nome como parâmetro
    navigation.navigate("CadastroEndereco", { alunoNome: nomeAluno });
  };

  // Abre modal de confirmação para exclusão
  const confirmarExclusao = (item) => {
    setItemSelecionado(item);
    setModalVisible(true);
    iniciarAnimacao(); // Inicia animação do modal
  };

  // Remove item da lista após confirmação
  const excluirItem = () => {
    // Filter: cria nova array sem o item selecionado
    setFrequencia(frequencia.filter((i) => i.id !== itemSelecionado.id));
    setModalVisible(false);
    setItemSelecionado(null);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Registro de Frequência da Academia
      </Text>

      <TextInput
        style={[styles.input, { backgroundColor: "#fff", color: "#000" }]}
        placeholder="Digite o nome do aluno"
        value={nome}
        onChangeText={setNome}
      />

      <Button title="Registrar Presença" onPress={registrarPresenca} />

      <FlatList
        data={frequencia}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20, width: "100%" }}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={[styles.itemText, { color: theme.text }]}>
              ✅ {item.nome}
            </Text>
            <TouchableOpacity onPress={() => confirmarExclusao(item)}>
              <Ionicons name="trash" size={22} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Modal com animação */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="none" // controlamos manualmente
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.modalContent,
              {
                backgroundColor: theme.background,
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          >
            <Text style={[styles.modalText, { color: theme.text }]}>
              Tem certeza que deseja excluir &#34;{itemSelecionado?.nome}&#34; ?
            </Text>
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Excluir" color="red" onPress={excluirItem} />
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
