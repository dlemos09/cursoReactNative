/**
 * TELA INICIAL (HOME SCREEN)
 *
 * Esta tela demonstra funcionalidades principais de acessibilidade:
 * - Lista de tarefas interativa com checkboxes acessíveis
 * - Anúncios para leitores de tela quando itens são marcados
 * - Síntese de voz (Text-to-Speech) usando expo-speech
 * - Integração com AccessibilityInfo para anúncios
 */

import React, { useState } from "react";
import { View, Text, Pressable, AccessibilityInfo } from "react-native";
import * as Speech from "expo-speech"; // Biblioteca para síntese de voz
import { makeHomeStyles } from "../styles/homeStyles";

export default function HomeScreen({ theme, fontScale, bigTargets }) {
  // Gera estilos baseados nas configurações de acessibilidade recebidas
  const styles = makeHomeStyles({ theme, fontScale, bigTargets });

  // ========== ESTADO DA LISTA DE TAREFAS ==========
  // Lista de tarefas demonstrando funcionalidades de acessibilidade
  const [items, setItems] = useState([
    { id: 1, text: "Ler as instruções de acessibilidade", done: false },
    { id: 2, text: "Testar com TalkBack/VoiceOver", done: false },
    { id: 3, text: "Ativar alto contraste", done: false },
    { id: 4, text: "Aumentar tamanho da fonte", done: false },
  ]);

  // ========== FUNÇÃO PARA ALTERNAR ESTADO DOS ITENS ==========
  const toggle = (id) => {
    setItems((prev) => {
      // Atualiza o item específico alternando seu status 'done'
      const updated = prev.map((it) =>
        it.id === id ? { ...it, done: !it.done } : it
      );

      // Encontra o item que foi modificado para anunciar a mudança
      const changed = updated.find((it) => it.id === id);

      // ===== ANÚNCIO PARA LEITORES DE TELA =====
      // Informa ao usuário sobre a mudança de status da tarefa
      AccessibilityInfo.announceForAccessibility(
        `${changed.text} marcado como ${
          changed.done ? "concluído" : "pendente"
        }`
      );

      return updated;
    });
  };

  // ========== FUNÇÃO PARA ANUNCIAR RESUMO EM VOZ ALTA ==========
  const announceSummary = () => {
    // Calcula quantas tarefas foram concluídas
    const done = items.filter((i) => i.done).length;
    const total = items.length;
    const msg = `Você concluiu ${done} de ${total} tarefas.`;

    // ===== SÍNTESE DE VOZ =====
    // Usa expo-speech para ler em voz alta, mesmo sem TalkBack/VoiceOver ativo
    Speech.speak(msg, { language: "pt-BR" });

    // ===== ANÚNCIO PARA LEITORES DE TELA =====
    // Envia também para leitores de tela, caso estejam ativos
    AccessibilityInfo.announceForAccessibility(msg);
  };

  return (
    <View style={{ gap: 16 }}>
      {/* ========== CARD PRINCIPAL COM LISTA DE TAREFAS ========== */}
      <View
        style={styles.card}
        accessible
        accessibilityLabel="Lista de tarefas de acessibilidade"
      >
        {/* Título da seção */}
        <Text style={styles.title}>Checklist de Acessibilidade</Text>

        {/* ===== RENDERIZAÇÃO DOS ITENS DA LISTA ===== */}
        {items.map((it) => {
          const checked = it.done;
          return (
            <Pressable
              key={it.id}
              onPress={() => toggle(it.id)}
              style={styles.item}
              // ===== PROPRIEDADES DE ACESSIBILIDADE =====
              accessibilityLabel={it.text} // Texto lido pelo leitor de tela
              accessibilityRole="checkbox" // Define como checkbox
              accessibilityState={{ checked }} // Informa se está marcado
              accessibilityHint="Toque para alternar concluído ou pendente." // Instruções de uso
            >
              {/* Indicador visual do checkbox */}
              <View
                style={[styles.checkbox, checked && styles.checkboxChecked]}
              />

              {/* Texto da tarefa */}
              <Text style={styles.itemText}>{it.text}</Text>
            </Pressable>
          );
        })}

        {/* ========== BOTÃO PARA LER RESUMO ========== */}
        <Pressable
          onPress={announceSummary}
          style={styles.announceBtn}
          accessibilityRole="button"
          accessibilityLabel="Ler resumo em voz alta"
          accessibilityHint="Lê em voz alta e envia ao leitor de tela quantas tarefas foram concluídas."
        >
          <Text style={styles.announceText}>🔈 Ler resumo</Text>
        </Pressable>
      </View>
    </View>
  );
}
