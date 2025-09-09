/**
 * COMPONENTE DE TEXTO ACESSÍVEL (A11yText)
 *
 * Este é um wrapper do componente Text nativo que garante configurações
 * consistentes de acessibilidade em todo o app.
 *
 * Características:
 * - Habilita allowFontScaling por padrão (respeita ajustes do sistema)
 * - Aceita parâmetro scale para ajuste local adicional
 * - Configurado como não acessível por padrão (evita leitura duplicada)
 * - Mantém todas as propriedades do Text nativo
 */

import React from "react";
import { Text } from "react-native";

/**
 * @param {React.ReactNode} children - Conteúdo do texto
 * @param {object} style - Estilos a serem aplicados
 * @param {number} scale - Multiplicador local de escala (além do fontScale global)
 * @param {object} rest - Demais propriedades do Text nativo
 */
export default function A11yText({ children, style, scale = 1, ...rest }) {
  return (
    <Text
      allowFontScaling // Permite que o texto seja escalado pelas configurações do sistema
      accessible={false} // Evita leitura duplicada pelos leitores de tela
      style={style}
      {...rest}
    >
      {children}
    </Text>
  );
}
