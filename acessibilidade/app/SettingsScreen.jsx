/**
 * TELA DE CONFIGURAÇÕES DE ACESSIBILIDADE
 *
 * Esta tela permite ao usuário personalizar configurações de acessibilidade:
 * - Ajustar escala de fonte personalizada
 * - Alternar alto contraste
 * - Controlar tamanho dos alvos de toque
 * - Visualizar amostras das mudanças em tempo real
 */

import React from "react";
import { View, Text } from "react-native";
import BigButton from "../components/BigButton";
import { makeSettingsStyles } from "../styles/settingsStyles";

export default function SettingsScreen({
  theme, // Tema atual (normal ou alto contraste)
  fontScale, // Escala de fonte atual
  setFontScale, // Função para alterar a escala de fonte
  isHighContrast, // Estado do alto contraste
  setIsHighContrast, // Função para alternar alto contraste
  bigTargets, // Estado dos alvos de toque grandes
  setBigTargets, // Função para alternar alvos grandes
}) {
  // Gera estilos baseados nas configurações atuais
  const styles = makeSettingsStyles({ theme, fontScale, bigTargets });

  // ========== FUNÇÕES PARA CONTROLE DE ESCALA DE FONTE ==========
  // Diminui a escala de fonte (mínimo 0.8x)
  const dec = () =>
    setFontScale((v) => Math.max(0.8, Number((v - 0.1).toFixed(1))));

  // Aumenta a escala de fonte (máximo 2.0x)
  const inc = () =>
    setFontScale((v) => Math.min(2.0, Number((v + 0.1).toFixed(1))));

  return (
    <View style={{ gap: 16 }}>
      {/* ========== SEÇÃO DE CONFIGURAÇÃO DE FONTE ========== */}
      <View
        style={styles.group}
        accessible
        accessibilityLabel="Grupo de fonte e amostra"
      >
        <Text style={styles.groupTitle}>Tamanho da fonte</Text>

        <View style={styles.row}>
          {/* Display da escala atual */}
          <Text style={styles.label}>
            Escala atual: {fontScale.toFixed(1)}×
          </Text>

          {/* Controles para aumentar/diminuir fonte */}
          <View style={styles.plusMinusWrap}>
            <BigButton
              title="A-"
              onPress={dec}
              style={[styles.switchBtn, styles.switchOff]}
              textStyle={styles.switchText}
              accessibilityLabel="Diminuir tamanho da fonte"
            />
            <BigButton
              title="A+"
              onPress={inc}
              style={[styles.switchBtn, styles.switchOn]}
              textStyle={styles.switchText}
              accessibilityLabel="Aumentar tamanho da fonte"
            />
          </View>
        </View>

        {/* ===== AMOSTRA DE TEXTO ===== */}
        {/* Permite visualizar o efeito da mudança de fonte em tempo real */}
        <View style={styles.sample} accessibilityLabel="Amostra de texto">
          <Text style={styles.sampleText}>
            Texto de amostra: este app respeita o ajuste do sistema e sua escala
            personalizada.
          </Text>
        </View>
      </View>

      {/* ========== SEÇÃO DE ALTO CONTRASTE ========== */}
      <View
        style={styles.group}
        accessible
        accessibilityLabel="Grupo de alto contraste"
      >
        <Text style={styles.groupTitle}>Contraste</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Alto contraste</Text>

          {/* Switch para alternar alto contraste */}
          <BigButton
            title={isHighContrast ? "Ativado" : "Desativado"}
            onPress={() => setIsHighContrast((v) => !v)}
            role="switch"
            style={[
              styles.switchBtn,
              isHighContrast ? styles.switchOn : styles.switchOff,
            ]}
            textStyle={styles.switchText}
            accessibilityState={{ checked: isHighContrast }} // Informa estado ao leitor de tela
            accessibilityHint="Alterna um tema com alto contraste e cores fortes."
          />
        </View>
      </View>

      {/* ========== SEÇÃO DE ALVOS DE TOQUE ========== */}
      <View
        style={styles.group}
        accessible
        accessibilityLabel="Grupo de alvos de toque"
      >
        <Text style={styles.groupTitle}>Acessibilidade tátil</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Alvos de toque grandes</Text>

          {/* Switch para alternar tamanho dos alvos de toque */}
          <BigButton
            title={bigTargets ? "Ativado" : "Desativado"}
            onPress={() => setBigTargets((v) => !v)}
            role="switch"
            style={[
              styles.switchBtn,
              bigTargets ? styles.switchOn : styles.switchOff,
            ]}
            textStyle={styles.switchText}
            accessibilityState={{ checked: bigTargets }} // Informa estado ao leitor de tela
            accessibilityHint="Aumenta áreas de toque e espaçamentos."
          />
        </View>
      </View>
    </View>
  );
}
