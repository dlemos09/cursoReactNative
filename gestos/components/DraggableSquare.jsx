// Biblioteca principal do React para criar componentes
import React from "react";

// StyleSheet do React Native para criar estilos otimizados
import { StyleSheet } from "react-native";

// Gesture: classe para criar diferentes tipos de gestos (Pan, Tap, Pinch, etc.)
// GestureDetector: componente que detecta e processa os gestos
import { Gesture, GestureDetector } from "react-native-gesture-handler";

// Animated: componente de View animada
// useSharedValue: hook para valores compartilhados entre JS e UI thread
// useAnimatedStyle: hook para criar estilos animados
// withSpring: função de animação com efeito de mola
// interpolate: função para mapear valores de uma faixa para outra
// Extrapolate: enum para definir comportamento fora dos limites da interpolação
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from "react-native-reanimated";

export default function DraggableSquare() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const backgroundColor = useSharedValue("#3498db");

  // Gesto de arrastar (Pan) - permite mover o elemento pela tela
  const panGesture = Gesture.Pan()
    // onStart: executado quando o usuário começa a tocar e arrastar
    .onStart(() => {
      // Salva a posição atual como ponto de início do arrasto
      // Isso é importante para calcular corretamente o movimento relativo
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    // onUpdate: executado continuamente enquanto o usuário arrasta
    .onUpdate((event) => {
      // event.translationX/Y: distância percorrida desde o início do gesto
      // Adiciona a translação à posição inicial para obter a nova posição
      translateX.value = startX.value + event.translationX;
      translateY.value = startY.value + event.translationY;
    })
    // onEnd: executado quando o usuário solta o dedo
    .onEnd(() => {
      // Aplica animação de mola para suavizar o final do movimento
      // withSpring adiciona um efeito de "bounce" natural
      translateX.value = withSpring(translateX.value);
      translateY.value = withSpring(translateY.value);
    });

  // Gesto de toque (Tap)
  const tapGesture = Gesture.Tap().onEnd(() => {
    backgroundColor.value =
      backgroundColor.value === "#3498db" ? "#e74c3c" : "#3498db";
  });

  // Gesto de pinça (Zoom)
  const pinchGesture = Gesture.Pinch().onUpdate((event) => {
    scale.value = interpolate(event.scale, [0.5, 3], [0.5, 3]);
  });

  // Gesto de rotação
  const rotationGesture = Gesture.Rotation().onUpdate((event) => {
    rotation.value = event.rotation;
  });

  // Composição dos gestos: Tap -> depois Pan, Pinch e Rotate simultâneos
  const composedGesture = Gesture.Simultaneous(
    Gesture.Exclusive(tapGesture, panGesture), 
    pinchGesture,
    rotationGesture
  );

  // Estilo animado do quadrado
  // useAnimatedStyle: converte valores compartilhados em estilos CSS animados
  // Esta função roda na UI thread para performance máxima (60fps)
  const animatedStyle = useAnimatedStyle(() => ({
    // transform: array de transformações visuais aplicadas ao elemento
    transform: [
      // translateX/Y: move o elemento horizontalmente e verticalmente
      { translateX: translateX.value }, // posição X na tela
      { translateY: translateY.value }, // posição Y na tela

      // scale: redimensiona o elemento (1 = tamanho normal, 2 = dobro do tamanho)
      { scale: scale.value }, // zoom aplicado pelo gesto de pinça

      // rotateZ: rotaciona o elemento no eixo Z (perpendicular à tela)
      { rotateZ: `${rotation.value}rad` }, // rotação em radianos
    ],

    // backgroundColor: cor de fundo que muda com tap gesture
    backgroundColor: backgroundColor.value, // alterna entre azul e vermelho
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={[styles.square, animatedStyle]} />
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
