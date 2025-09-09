# 🎮 Tetrix - Jogo Tetris em React Native

<div align="center">
  
  ![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  
  <p>Uma implementação completa e moderna do clássico jogo Tetris desenvolvida em React Native com Expo.</p>
  
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Como Jogar](#-como-jogar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Arquitetura](#-arquitetura)
- [Componentes Principais](#-componentes-principais)
- [Lógica do Jogo](#-lógica-do-jogo)
- [Estilização](#-estilização)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Tetrix é uma versão moderna e completa do icônico jogo Tetris, desenvolvida inteiramente em React Native usando Expo. O projeto oferece uma experiência de jogo fluida e responsiva, com interface moderna, controles intuitivos e todas as funcionalidades clássicas do Tetris.

### ✨ Características Destacadas

- 🎮 **Jogabilidade Clássica**: Todas as 7 peças originais do Tetris
- 📱 **Design Responsivo**: Funciona perfeitamente em smartphones e tablets
- 💾 **Persistência de Dados**: Histórico de partidas salvo localmente
- 🎨 **Interface Moderna**: Design clean com tema escuro
- ⚡ **Performance Otimizada**: Código otimizado para fluidez máxima
- 🔄 **Rotação Inteligente**: Sistema avançado de rotação com wall kick

---

## 🚀 Funcionalidades

### 🎮 Gameplay

- ✅ **7 Tipos de Peças**: I, J, L, O, S, T, Z com cores distintas
- ✅ **Controles Completos**: Movimento horizontal, rotação e queda rápida
- ✅ **Sistema de Pontuação**: Pontos por linhas eliminadas e movimentos
- ✅ **Níveis Progressivos**: Velocidade aumenta conforme o progresso
- ✅ **Eliminação de Linhas**: Detecção e remoção automática de linhas completas
- ✅ **Preview da Próxima Peça**: Visualização da próxima peça a ser jogada
- ✅ **Pause/Resume**: Pausar e retomar o jogo a qualquer momento

### 📊 Sistema de Pontuação

- **Linhas Eliminadas**: 100 pontos × nível por linha
- **Queda Rápida**: 1 ponto por movimento manual
- **Progressão de Nível**: Aumenta a cada 4 linhas eliminadas
- **Velocidade**: Acelera automaticamente com o nível

### 💾 Persistência

- **Histórico Local**: Até 50 partidas salvas no dispositivo
- **Dados Salvos**: Data/hora, pontuação final e nível alcançado
- **Funcionalidade de Limpeza**: Opção para limpar todo o histórico

---

## 🛠 Tecnologias

### Core

- **React Native** - Framework principal para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento e build
- **React Navigation** - Navegação entre telas

### Gerenciamento de Estado

- **React Hooks** - useState, useEffect, useRef, useCallback
- **AsyncStorage** - Armazenamento local de dados

### Interface e UX

- **StyleSheet API** - Estilização nativa
- **Dimensions API** - Design responsivo
- **TouchableOpacity** - Interações tácteis

---

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI
- Dispositivo móvel ou emulador

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/tetrix.git
   cd tetrix
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npx expo start
   ```

4. **Execute no dispositivo**
   - Escaneie o QR code com o app Expo Go (Android/iOS)
   - Ou pressione `a` para Android emulator
   - Ou pressione `i` para iOS simulator

---

## 🎮 Como Jogar

### Controles

| Botão | Ação                        |
| ----- | --------------------------- |
| ◀     | Mover peça para esquerda    |
| ▶     | Mover peça para direita     |
| ⤴     | Rotacionar peça 90° horário |
| ↓     | Queda rápida (soft drop)    |

### Objetivo

- **Formar Linhas**: Complete linhas horizontais para eliminá-las
- **Evitar o Topo**: Não deixe as peças chegarem ao topo do tabuleiro
- **Maximizar Pontos**: Elimine múltiplas linhas para mais pontos
- **Progredir Níveis**: Alcance níveis mais altos para maior desafio

### Dicas Estratégicas

1. **Planeje com Antecedência**: Use a preview da próxima peça
2. **Crie Combos**: Elimine múltiplas linhas simultaneamente
3. **Gerencie o Espaço**: Mantenha o tabuleiro organizado
4. **Use a Rotação**: Experimente diferentes orientações das peças

---

## 📁 Estrutura do Projeto

```
tetrix/
├── 📁 app/                    # Telas principais
│   ├── _layout.jsx           # Configuração de navegação
│   ├── GameScreen.jsx        # Tela do jogo principal
│   ├── HomeScreen.jsx        # Menu inicial
│   └── HistoryScreen.jsx     # Histórico de partidas
├── 📁 components/            # Componentes reutilizáveis
│   ├── Board.jsx             # Tabuleiro do jogo
│   └── Cell.jsx              # Célula individual
├── 📁 styles/                # Estilos organizados
│   ├── boardStyles.js        # Estilos do tabuleiro
│   ├── gameStyles.js         # Estilos da tela de jogo
│   ├── historyStyles.js      # Estilos do histórico
│   └── homeStyles.js         # Estilos da home
├── 📁 utils/                 # Lógica e utilitários
│   ├── gameLogic.js          # Motor do jogo
│   └── tetrominoes.js        # Definição das peças
├── package.json              # Dependências
├── app.json                  # Configuração Expo
└── README.md                 # Este arquivo
```

---

## 🏗 Arquitetura

### Padrões de Design

- **Separação de Responsabilidades**: Lógica separada da apresentação
- **Componentes Funcionais**: Uso extensivo de React Hooks
- **Estado Imutável**: Gerenciamento seguro de estados
- **Funções Puras**: Lógica do jogo sem efeitos colaterais

---

## 🧩 Componentes Principais

### GameScreen.jsx

**Responsabilidade**: Gerenciamento principal do jogo

- Estados do jogo (grid, peça ativa, pontuação, nível)
- Timer de queda automática
- Lógica de spawn e movimento das peças
- Detecção de game over
- Interface de controles

**Hooks Utilizados**:

- `useState`: Gerenciamento de estados
- `useEffect`: Timers e lifecycle
- `useRef`: Referência do timer
- `useCallback`: Otimização de performance

### Board.jsx

**Responsabilidade**: Renderização do tabuleiro

- Mapeia matriz bidimensional em componentes visuais
- Suporte a modo normal e preview (pequeno)
- Renderização otimizada com keys únicas

### Cell.jsx

**Responsabilidade**: Renderização de célula individual

- Estado vazio (transparente com borda)
- Estado ocupado (cor da peça)
- Suporte a tamanhos diferentes

---

## 🎯 Lógica do Jogo

### gameLogic.js

#### `createGrid(rows, cols)`

Cria matriz bidimensional vazia para o tabuleiro.

#### `canMove(grid, piece, dx, dy)`

Verifica se uma peça pode se mover para nova posição:

- Verifica colisões com bordas
- Verifica colisões com peças existentes
- Retorna boolean indicando movimento válido

#### `mergePiece(grid, piece)`

Mescla peça atual permanentemente ao tabuleiro:

- Adiciona cor da peça às células ocupadas
- Retorna novo grid com peça integrada

#### `rotatePiece(piece)`

Rotaciona peça 90 graus no sentido horário:

- Algoritmo funciona com qualquer tamanho de matriz
- Remove espaços vazios após rotação
- Preserva forma original das peças

#### `clearLines(grid)`

Remove linhas completas e reorganiza tabuleiro:

- Identifica linhas totalmente preenchidas
- Remove linhas completas
- Adiciona linhas vazias no topo
- Retorna novo grid e número de linhas eliminadas

### tetrominoes.js

Define as 7 peças clássicas do Tetris:

| Peça | Formato              | Cor      | Descrição       |
| ---- | -------------------- | -------- | --------------- |
| I    | ████                 | Ciano    | Linha reta      |
| J    | █<br>███             | Azul     | L invertido     |
| L    | &nbsp;&nbsp;█<br>███ | Laranja  | L normal        |
| O    | ██<br>██             | Amarelo  | Quadrado        |
| S    | &nbsp;██<br>██       | Verde    | S (zigue-zague) |
| T    | &nbsp;█<br>███       | Roxo     | T invertido     |
| Z    | ██<br>&nbsp;██       | Vermelho | Z (zigue-zague) |

---

## 🎨 Estilização

### Design System

- **Cores Primárias**: Tema escuro com acentos coloridos
- **Tipografia**: Fontes system com pesos variados
- **Espaçamento**: Grid system consistente
- **Responsividade**: Breakpoints para tablet/smartphone

### Responsividade

```javascript
const { width } = Dimensions.get("window");
const isTablet = width > 768;

// Tamanhos adaptativos
const fontSize = isTablet ? 24 : 18;
const padding = isTablet ? 20 : 12;
```

---

## 🚀 Performance e Otimizações

### Técnicas Aplicadas

1. **useCallback**: Funções críticas memorizada
2. **Cleanup**: Remoção adequada de timers e listeners
3. **Estado Imutável**: Prevenção de re-renders desnecessários
4. **Keys Otimizadas**: Renderização eficiente de listas

### Memory Management

- Limpeza automática de intervalos
- Remoção de listeners de navegação
- Estados resetados adequadamente
- Prevenção de vazamentos de memória

---

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, siga estes passos:

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Guidelines

- Mantenha o código limpo e bem documentado
- Siga os padrões estabelecidos no projeto
- Teste suas mudanças antes do PR
- Atualize a documentação se necessário

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Desenvolvido durante o curso de React Native**

---

## 🙏 Agradecimentos

- Inspirado no clássico Tetris da Tetris Company
- Comunidade React Native pela documentação excelente
- Expo team pelas ferramentas incríveis
- Todos que contribuíram com feedback e sugestões

---

<div align="center">
  
  **⭐ Se este projeto foi útil, considere dar uma estrela! ⭐**
  
  <p>Feito com ❤️ e muito ☕</p>
  
</div>
