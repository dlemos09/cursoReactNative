/**
 * TELA DE BLOQUEIO COM AUTENTICAÇÃO BIOMÉTRICA
 *
 * Esta tela implementa um sistema de bloqueio seguro com:
 * - Autenticação biométrica usando expo-local-authentication
 * - Fallback para entrada sem biometria
 * - Anúncios acessíveis para informar o status
 * - Interface adaptável baseada na disponibilidade de biometria
 */

import React, { useEffect, useState } from "react";
import { View, Text, Alert, AccessibilityInfo } from "react-native";
import * as LocalAuthentication from "expo-local-authentication"; // Biblioteca para autenticação biométrica
import BigButton from "../components/BigButton";
import { makeLockStyles } from "../styles/lockStyles";

export default function LockScreen({ theme, fontScale, bigTargets, onUnlock }) {
  // Gera estilos baseados nas configurações de acessibilidade
  const styles = makeLockStyles({ theme, fontScale, bigTargets });

  // ========== ESTADO DE DISPONIBILIDADE DA BIOMETRIA ==========
  // Controla se a autenticação biométrica está disponível no dispositivo
  const [available, setAvailable] = useState(null);

  // ========== EFFECT PARA VERIFICAR DISPONIBILIDADE DA BIOMETRIA ==========
  useEffect(() => {
    (async () => {
      // Verifica se o dispositivo tem hardware biométrico
      const hasHardware = await LocalAuthentication.hasHardwareAsync();

      // Verifica se o usuário tem biometria cadastrada
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      // Biometria está disponível apenas se há hardware E cadastro
      setAvailable(hasHardware && isEnrolled);

      // ===== ANÚNCIO INICIAL PARA LEITORES DE TELA =====
      AccessibilityInfo.announceForAccessibility(
        "Tela bloqueada. Use sua digital ou escolha entrar sem digital."
      );
    })();
  }, []);

  // ========== FUNÇÃO PARA AUTENTICAÇÃO BIOMÉTRICA ==========
  const handleAuth = async () => {
    try {
      // Inicia o processo de autenticação biométrica
      const res = await LocalAuthentication.authenticateAsync({
        promptMessage: "Desbloquear com biometria", // Mensagem exibida no prompt
        cancelLabel: "Cancelar", // Texto do botão cancelar
        disableDeviceFallback: false, // Permite fallback (PIN/senha)
      });

      if (res.success) {
        // ===== SUCESSO NA AUTENTICAÇÃO =====
        AccessibilityInfo.announceForAccessibility("Desbloqueado com sucesso.");
        onUnlock();
      } else if (res.error) {
        // ===== ERRO NA AUTENTICAÇÃO =====
        Alert.alert("Erro", "Falha na autenticação: " + res.error);
      }
    } catch (_error) {
      // Prefixo underscore indica variável não utilizada intencionalmente
      // ===== ERRO GERAL =====
      Alert.alert("Erro", "Não foi possível autenticar.");
    }
  };

  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel="Tela de bloqueio"
    >
      {/* ========== ÍCONE DE BLOQUEIO ========== */}
      {/* Emoji decorativo, ocultado dos leitores de tela */}
      <Text style={styles.lockEmoji} accessibilityElementsHidden>
        🔒
      </Text>

      {/* ========== TÍTULO E DESCRIÇÃO ========== */}
      <Text style={styles.title}>App bloqueado</Text>
      <Text style={styles.subtitle}>
        Por segurança, o conteúdo está oculto. Escolha uma forma de desbloqueio.
      </Text>

      {/* ========== BOTÃO DE AUTENTICAÇÃO BIOMÉTRICA ========== */}
      <BigButton
        title="Desbloquear com digital"
        onPress={handleAuth}
        style={styles.authBtn}
        textStyle={styles.authText}
        accessibilityHint="Abre o prompt do sistema para leitura da sua biometria."
      />

      {/* ========== BOTÃO ALTERNATIVO (SEM BIOMETRIA) ========== */}
      <BigButton
        title="Entrar sem digital"
        onPress={() => {
          // Anuncia o desbloqueio sem biometria
          AccessibilityInfo.announceForAccessibility(
            "Desbloqueado sem biometria."
          );
          onUnlock();
        }}
        style={[
          styles.authBtn,
          { backgroundColor: theme.success, marginTop: 12 },
        ]}
        textStyle={[styles.authText, { color: "#fff" }]}
        accessibilityHint="Desbloqueia o app sem usar digital."
      />

      {/* ========== MENSAGEM DE AJUDA ========== */}
      {/* Exibida apenas se biometria não estiver disponível */}
      {available === false && (
        <Text style={styles.help}>
          Biometria indisponível. Você pode entrar sem digital.
        </Text>
      )}
    </View>
  );
}
