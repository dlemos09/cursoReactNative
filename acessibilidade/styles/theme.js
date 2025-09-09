/**
 * SISTEMA DE TEMAS PARA ACESSIBILIDADE
 *
 * Este arquivo define dois temas: normal (light) e alto contraste (highContrast).
 * O alto contraste melhora a legibilidade para usuários com deficiências visuais.
 */

// ========== TEMA CLARO (PADRÃO) ==========
export const light = {
  background: "#FFFFFF", // Fundo branco
  text: "#1A1A1A", // Texto escuro
  primary: "#0A84FF", // Azul padrão iOS
  card: "#F5F7FA", // Fundo dos cards (cinza muito claro)
  border: "#DDE3EA", // Bordas sutis
  danger: "#D7263D", // Vermelho para alertas
  success: "#2BA84A", // Verde para sucesso
  focus: "#FFCC00", // Amarelo para indicar foco
};

// ========== TEMA DE ALTO CONTRASTE ==========
// Cores muito contrastantes para melhor legibilidade
export const highContrast = {
  background: "#000000", // Fundo preto puro
  text: "#FFFFFF", // Texto branco puro
  primary: "#00FFFF", // Ciano brilhante (alto contraste com preto)
  card: "#111111", // Cards quase pretos
  border: "#FFFFFF", // Bordas brancas (máximo contraste)
  danger: "#FF4D4F", // Vermelho mais vibrante
  success: "#00FF7F", // Verde mais vibrante (spring green)
  focus: "#FFFF00", // Amarelo puro para foco
};

// ========== FUNÇÃO PARA SELECIONAR TEMA ==========
/**
 * Retorna o tema apropriado baseado na configuração do usuário
 * @param {boolean} isHigh - Se true, retorna tema de alto contraste
 * @returns {object} Objeto com as cores do tema
 */
export const makeTheme = (isHigh) => (isHigh ? highContrast : light);
