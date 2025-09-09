/**
 * ESTILOS GLOBAIS ADAPTATIVOS
 *
 * Este arquivo gera estilos que se adaptam automaticamente às configurações
 * de acessibilidade do usuário: tema, escala de fonte e tamanho dos alvos.
 */

import { StyleSheet } from "react-native";

/**
 * Gera folha de estilos baseada nas configurações de acessibilidade
 * @param {object} theme - Tema atual (cores)
 * @param {number} fontScale - Multiplicador da fonte
 * @param {boolean} bigTargets - Se deve usar alvos de toque grandes
 */
export const makeGlobalStyles = ({ theme, fontScale, bigTargets }) => {
  // ===== CÁLCULOS BASE =====
  const base = 16 * fontScale; // Tamanho base da fonte ajustado
  const padding = bigTargets ? 16 : 10; // Padding baseado no tamanho dos alvos
  const radius = 16; // Raio padrão dos elementos

  return StyleSheet.create({
    // ===== CONTAINER PRINCIPAL =====
    app: {
      flex: 1,
      backgroundColor: theme.background,
    },

    // ===== CABEÇALHO DA APLICAÇÃO =====
    header: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerTitle: {
      fontSize: base * 1.1, // Título ligeiramente maior
      fontWeight: "700",
      color: theme.text,
    },

    // ===== BARRA DE NAVEGAÇÃO (TABS) =====
    tabBar: {
      flexDirection: "row",
      gap: 8,
      padding: 8,
      backgroundColor: theme.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    tabBtn: {
      flex: 1,
      paddingVertical: padding, // Usa padding adaptativo
      paddingHorizontal: 12,
      borderRadius: radius,
      alignItems: "center",
      borderWidth: 2,
      borderColor: "transparent",
    },
    tabBtnActive: {
      backgroundColor: theme.primary + "22", // Cor primária com transparência
      borderColor: theme.primary,
    },
    tabBtnText: {
      fontSize: base * 0.95, // Texto das abas ligeiramente menor
      fontWeight: "700",
      color: theme.text,
    },

    // ===== BOTÃO DE BLOQUEIO =====
    lockNowBtn: {
      paddingVertical: padding, // Usa padding adaptativo
      paddingHorizontal: 12,
      backgroundColor: theme.danger, // Cor de perigo/alerta
      borderRadius: radius,
    },
    lockNowText: {
      color: "#fff", // Texto branco sobre fundo vermelho
      fontWeight: "700",
      fontSize: base * 0.9,
    },

    // ===== ÁREA DE CONTEÚDO PRINCIPAL =====
    content: {
      flex: 1,
      padding: 16,
    },

    // ===== BOTÃO "SKIP TO CONTENT" =====
    // Visível apenas para usuários de leitores de tela
    srOnlySkip: {
      position: "absolute",
      left: 12,
      top: 8,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 12,
      backgroundColor: theme.focus, // Cor de destaque para foco
      zIndex: 9999, // Sempre no topo
    },
    srOnlySkipText: {
      color: "#000", // Texto escuro sobre fundo amarelo
      fontWeight: "800",
      fontSize: base * 0.9,
    },
  });
};
