import{Text, View, Pressable} from "react-native";
import {styles} from "../styles/styles";
// import {Link} from "expo-router";
import {router} from "expo-router";


export default function Settings() {

    const goToHome = () => {
        router.navigate('/')
    }
        // Navegação programática para a tela de usuários



  return (
    <View style={[styles.container, {backgroundColor: "#fAb"}]}>
      <Text>Settings Screen</Text>
      {/* <Link href="/">Ir para Usuários</Link> */}
      <Pressable onPress={goToHome}>
        <Text>Ir para Home</Text>
      </Pressable>
    </View>
  );
}