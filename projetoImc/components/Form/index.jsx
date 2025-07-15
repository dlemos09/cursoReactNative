import {
  View,
  Text,
  TextInput,
  Pressable,
  Animated,
  Vibration,
  Keyboard,
} from "react-native";
import ResultImc from "./ResultImc";
import { useState, useRef, useEffect } from "react";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  // Animação de slide-up
  const slideAnim = useRef(new Animated.Value(100)).current; // Começa 100px abaixo
  const fadeAnim = useRef(new Animated.Value(0)).current; // Começa invisível

  // Executa a animação quando o componente carrega
  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, fadeAnim]);

  // Função para calcular o IMC
  // A função é chamada quando o usuário pressiona o botão "Calcular"
  function imcCalculator() {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    return (weightNum / (heightNum * heightNum)).toFixed(2);
  }
  // Verifica se os campos de altura e peso estão preenchidos corretamente
  // Se não estiverem, exibe uma mensagem de erro

  function verificationImc() {
    // Verifica se os campos estão preenchidos corretamente
    if (imc === null) {
      Vibration.vibrate(1000); // Vibra por 1 segundo
      setErrorMessage("Campo obrigatório*");
      return;
    }
  }

  // Valida se o peso e altura foram preenchidos
  // Se sim, calcula o IMC e exibe a mensagem
  function validationImc() {
    // Fecha o teclado
    Keyboard.dismiss();

    if (weight != null && height != null) {
      const calculatedImc = imcCalculator();
      setImc(calculatedImc);
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
      return;
    }
    verificationImc();
    // Se os campos não estiverem preenchidos, reseta o IMC e a mensagem
    setImc(null);
    setTextButton("Calcular IMC");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <Animated.View
        style={[
          styles.formContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMensage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMensage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex: 75.5"
            keyboardType="numeric"
          />
          <Pressable
            style={({ pressed }) => [
              styles.buttonCalculator,
              {
                opacity: pressed ? 0.8 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
              },
            ]}
            onPress={() => validationImc()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </Pressable>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
      </Animated.View>
    </Pressable>
  );
}
