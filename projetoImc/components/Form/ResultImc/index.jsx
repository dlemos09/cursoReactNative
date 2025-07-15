import { Text, Animated, TouchableOpacity, Share, View } from "react-native";
import { useRef, useEffect } from "react";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC hoje é: ${props.resultImc}`,
    });
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Anima quando a mensagem ou resultado IMC muda
  useEffect(() => {
    if (
      props.messageResultImc &&
      props.messageResultImc !== "Preencha o peso e altura" &&
      props.resultImc
    ) {
      // Reset da animação
      fadeAnim.setValue(0);

      // Inicia a animação
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [props.messageResultImc, props.resultImc, fadeAnim]);

  return (
    <> 
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.textResult}>{props.messageResultImc}</Text>
        <Text style={styles.textImcResult}>{props.resultImc}</Text>
      </Animated.View>

      <View>
        {props.resultImc != null ? (
          <TouchableOpacity onPress={onShare} style={styles.boxShareButton}>
            <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </>
  );
}
