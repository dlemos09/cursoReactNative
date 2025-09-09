# 🌟 App de Acessibilidade React Native

Um aplicativo completo demonstrando as melhores práticas de **acessibilidade** em React Native, construído com Expo e focado em inclusão digital.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🎯 Objetivo

Este projeto demonstra a implementação de funcionalidades avançadas de acessibilidade em aplicações React Native, seguindo as diretrizes **WCAG 2.1** e as melhores práticas para criar aplicativos verdadeiramente inclusivos.

## ✨ Funcionalidades Principais

### 🎨 **Sistema de Temas Adaptativos**

- Tema padrão com cores suaves e boa legibilidade
- Tema de alto contraste para usuários com deficiências visuais
- Alternância dinâmica entre temas

### 📝 **Controle de Escala de Fonte**

- Escala personalizada de 0.8x a 2.0x
- Integração com configurações do sistema
- Visualização em tempo real das mudanças

### 🎯 **Alvos de Toque Otimizados**

- Áreas de toque aumentadas (mínimo 44dp)
- Espaçamentos maiores entre elementos
- Melhora usabilidade para deficiências motoras

### 🔐 **Autenticação Biométrica Acessível**

- Suporte a impressão digital e reconhecimento facial
- Fallback para entrada sem biometria
- Anúncios claros do status de autenticação

### ⏰ **Sistema de Bloqueio Inteligente**

- Timer de inatividade configurável (30 segundos)
- Bloqueio automático ao ir para background
- Anúncios informativos sobre o status do bloqueio

### 🗣️ **Síntese de Voz (TTS)**

- Leitura em voz alta usando `expo-speech`
- Funciona independente de leitores de tela
- Suporte ao idioma português brasileiro

### 📢 **Integração com Leitores de Tela**

- Anúncios dinâmicos usando `AccessibilityInfo`
- Propriedades acessíveis em todos os elementos
- Gerenciamento inteligente de foco

### 🦘 **Skip to Content**

- Botão para pular diretamente ao conteúdo principal
- Visível apenas quando leitor de tela está ativo
- Facilita navegação para usuários de screen readers

## 🏗️ Arquitetura

```
├── app/                     # Telas principais
│   ├── _layout.jsx         # Layout principal com navegação
│   ├── HomeScreen.jsx      # Tela inicial com checklist
│   ├── LockScreen.jsx      # Tela de bloqueio biométrico
│   └── SettingsScreen.jsx  # Configurações de acessibilidade
├── components/             # Componentes reutilizáveis
│   ├── A11yText.jsx       # Componente de texto acessível
│   └── BigButton.jsx      # Botão acessível otimizado
├── styles/                # Sistema de estilos dinâmicos
│   ├── theme.js           # Temas (normal e alto contraste)
│   ├── globalStyles.js    # Estilos globais adaptativos
│   ├── homeStyles.js      # Estilos da tela inicial
│   ├── lockStyles.js      # Estilos da tela de bloqueio
│   └── settingsStyles.js  # Estilos das configurações
└── DOCUMENTACAO_PROJETO_ACESSIBILIDADE.txt  # Documentação detalhada
```

## 🛠️ Tecnologias

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **Expo Router** - Navegação baseada em arquivos
- **expo-local-authentication** - Autenticação biométrica
- **expo-speech** - Síntese de voz
- **AccessibilityInfo API** - APIs nativas de acessibilidade

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Dispositivo físico ou emulador

### Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd acessibilidade
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm start
# ou
npx expo start
```

4. **Abra no dispositivo**

- Escaneie o QR code com o **Expo Go** (Android/iOS)
- Ou use emulador Android/iOS
- Ou pressione `w` para abrir no navegador

## 🧪 Como Testar a Acessibilidade

### 📱 **Leitores de Tela**

- **Android**: Ative o TalkBack em Configurações > Acessibilidade
- **iOS**: Ative o VoiceOver em Ajustes > Acessibilidade

### 🔍 **Configurações do Sistema**

- Teste diferentes tamanhos de fonte do sistema
- Ative alto contraste nas configurações do dispositivo
- Use recursos de ampliação de tela

### ⌨️ **Navegação**

- Teste navegação apenas com gestos de acessibilidade
- Verifique a ordem lógica de foco dos elementos
- Teste a funcionalidade "skip to content"

### 🎤 **Síntese de Voz**

- Use o botão "🔈 Ler resumo" na tela inicial
- Verifique anúncios automáticos durante navegação
- Teste com e sem leitores de tela ativos

## 🎓 Conceitos de Acessibilidade Demonstrados

### ♿ **WCAG 2.1 Principles**

- **Perceptible**: Alto contraste, escalas de fonte, alternativas textuais
- **Operable**: Navegação por teclado, alvos de toque adequados
- **Understandable**: Linguagem clara, instruções consistentes
- **Robust**: Compatibilidade com tecnologias assistivas

### 👥 **Deficiências Contempladas**

- **Visual**: Alto contraste, escalas de fonte, suporte a leitores de tela
- **Motora**: Alvos de toque grandes, tempos adequados para interação
- **Auditiva**: Feedback visual para informações sonoras
- **Cognitiva**: Interface simples e intuitiva, instruções claras

## 🔍 Principais APIs Utilizadas

```javascript
// Anúncios para leitores de tela
AccessibilityInfo.announceForAccessibility("Mensagem");

// Controle de foco
AccessibilityInfo.setAccessibilityFocus(node);

// Detecção de leitor de tela
AccessibilityInfo.isScreenReaderEnabled();

// Síntese de voz
Speech.speak("Texto", { language: "pt-BR" });

// Autenticação biométrica
LocalAuthentication.authenticateAsync(options);
```

## 📋 Propriedades Acessíveis Implementadas

```jsx
<Pressable
  accessibilityRole="button"           // Define tipo do elemento
  accessibilityLabel="Texto alternativo" // Texto lido pelo leitor de tela
  accessibilityHint="Ação que será executada" // Instruções de uso
  accessibilityState={{ checked: true }} // Estado atual do elemento
  accessibilityElementsHidden={false}   // Visibilidade para leitores
>
```

## 🎯 Componentes Principais

### 🏠 **HomeScreen**

Lista interativa de tarefas demonstrando:

- Checkboxes acessíveis
- Anúncios dinâmicos de mudanças de estado
- Botão de síntese de voz para resumo

### 🔒 **LockScreen**

Tela de bloqueio com:

- Autenticação biométrica opcional
- Entrada alternativa sem biometria
- Detecção automática de hardware disponível

### ⚙️ **SettingsScreen**

Configurações adaptativas para:

- Escala de fonte personalizada
- Toggle de alto contraste
- Controle de alvos de toque grandes

### 🔘 **BigButton**

Botão otimizado com:

- Área de toque adequada (mín. 44dp)
- Propriedades de acessibilidade completas
- Feedback tátil (ripple effect)

## 📚 Recursos de Aprendizado

- [React Native Accessibility Guide](https://reactnative.dev/docs/accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Expo Accessibility Documentation](https://docs.expo.dev/guides/accessibility/)
- [iOS Accessibility Guidelines](https://developer.apple.com/accessibility/)
- [Android Accessibility Guidelines](https://developer.android.com/guide/topics/ui/accessibility)

## 🤝 Contribuindo

Contribuições são bem-vindas! Este projeto serve como referência educacional para a comunidade. Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Equipe do Expo pelo excelente framework
- Comunidade React Native pelas contribuições
- Especialistas em acessibilidade pelas diretrizes
- Usuários que dependem de tecnologias assistivas

---

**💡 Lembre-se**: Acessibilidade não é um recurso opcional, é um direito fundamental. Este projeto demonstra que criar aplicativos inclusivos é não apenas possível, mas essencial para uma sociedade digital mais justa.

🌟 **Se este projeto te ajudou, considere dar uma estrela!** ⭐
