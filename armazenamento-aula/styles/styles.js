// ============================================================================
// ESTILOS GLOBAIS - Projeto Armazenamento
// Design System com tema escuro e componentes modernos
// ============================================================================

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // ==================== CONTAINER PRINCIPAL ====================
  container: {
    flex: 1, // Ocupa toda a tela disponível
    backgroundColor: "#0b132b", // Azul escuro profundo (tema escuro)
    padding: 16, // Espaçamento interno de 16px
    paddingTop: 48, // Espaçamento superior maior (status bar)
  },

  // ==================== TIPOGRAFIA ====================
  title: {
    color: "#fff", // Texto branco para contraste
    fontSize: 24, // Tamanho grande para títulos
    fontWeight: "700", // Peso bold (negrito)
    marginBottom: 16, // Espaçamento inferior
  },

  // ==================== COMPONENTES DE INPUT ====================
  input: {
    backgroundColor: "#1c2541", // Azul escuro mais claro que o fundo
    color: "#fff", // Texto branco
    paddingHorizontal: 12, // Espaçamento interno horizontal
    paddingVertical: 10, // Espaçamento interno vertical
    borderRadius: 12, // Bordas arredondadas modernas
    marginBottom: 12, // Espaçamento inferior entre elementos
  },

  // ==================== BOTÕES ====================
  button: {
    backgroundColor: "#3a86ff", // Azul vibrante (cor primária)
    paddingHorizontal: 16, // Espaçamento interno horizontal
    paddingVertical: 12, // Espaçamento interno vertical
    borderRadius: 12, // Bordas arredondadas consistentes
    alignItems: "center", // Centraliza conteúdo horizontalmente
    justifyContent: "center", // Centraliza conteúdo verticalmente
    marginLeft: 8, // Margem esquerda para espaçamento
  },

  buttonText: {
    color: "#fff", // Texto branco para contraste
    fontWeight: "700", // Texto em negrito
  },

  // ==================== LAYOUTS ====================
  row: {
    flexDirection: "row", // Elementos em linha horizontal
    alignItems: "center", // Centraliza verticalmente na linha
  },

  // ==================== CARDS E CONTEÚDO ====================
  card: {
    backgroundColor: "#1c2541", // Mesmo tom dos inputs para consistência
    borderRadius: 12, // Bordas arredondadas
    padding: 12, // Espaçamento interno
  },

  cardText: {
    color: "#fff", // Texto branco
    fontSize: 16, // Tamanho padrão legível
  },
  // ==================== TEXTOS AUXILIARES ====================
  muted: {
    color: "#cbd5e1", // Cinza claro para textos secundários
    textAlign: "center", // Centralizado horizontalmente
    marginTop: 24, // Espaçamento superior generoso
  },

  // ==================== SEÇÕES DE AÇÕES ====================
  actions: {
    flexDirection: "row", // Botões em linha horizontal
    flexWrap: "wrap", // Quebra linha se necessário
    gap: 8, // Espaçamento uniforme entre botões
    marginTop: 12, // Espaçamento superior
  },

  // ==================== VARIAÇÕES DE BOTÕES ====================
  secondary: {
    backgroundColor: "#415a77", // Azul acinzentado para botões secundários
  },

  // ==================== RODAPÉ ====================
  footer: {
    color: "#cbd5e1", // Texto em cinza claro
    marginTop: 12, // Espaçamento superior
    fontSize: 12, // Tamanho pequeno para texto informativo
  },
});

// ============================================================================
// PALETA DE CORES UTILIZADA
// ============================================================================
//
// #0b132b - Azul escuro profundo (fundo principal)
// #1c2541 - Azul escuro médio (cards e inputs)
// #3a86ff - Azul vibrante (botão primário)
// #415a77 - Azul acinzentado (botões secundários)
// #ffffff - Branco (textos principais)
// #cbd5e1 - Cinza claro (textos auxiliares)
//
// Esta paleta cria uma hierarquia visual clara e moderna,
// com excelente contraste para acessibilidade.
// ============================================================================
