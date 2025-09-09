/**
 * COMPONENTE DE BOTÃO ACESSÍVEL (BigButton)
 *
 * Este componente implementa um botão altamente acessível que serve como
 * base para todos os botões da aplicação.
 *
 * Características de acessibilidade:
 * - Propriedades de acessibilidade configuradas adequadamente
 * - Suporte a diferentes roles (button, switch, etc.)
 * - Labels e hints customizáveis
 * - Feedback tátil no Android (ripple effect)
 * - Área de toque otimizada
 */

import React from "react";
import { Pressable, Text } from "react-native";

/**
 * @param {string} title - Texto exibido no botão
 * @param {function} onPress - Função chamada ao pressionar
 * @param {object} style - Estilos do container do botão
 * @param {object} textStyle - Estilos do texto do botão
 * @param {string} accessibilityLabel - Label lido pelo leitor de tela (padrão: title)
 * @param {string} accessibilityHint - Dica sobre o que o botão faz
 * @param {string} role - Papel do elemento (button, switch, etc.)
 */
export default function BigButton({
  title,
  onPress,
  style,
  textStyle,
  accessibilityLabel,
  accessibilityHint,
  role = "button", // Papel padrão é botão
}) {
  return (
    <Pressable
      onPress={onPress}
      style={style}
      // ===== PROPRIEDADES DE ACESSIBILIDADE =====
      accessibilityRole={role} // Define o tipo de elemento
      accessibilityLabel={accessibilityLabel || title} // Texto lido (padrão: title)
      accessibilityHint={accessibilityHint} // Descrição da ação
      // ===== FEEDBACK TÁTIL (ANDROID) =====
      android_ripple={{ color: "#00000022" }} // Efeito ripple no Android
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
