import { Text, View, Image } from "react-native";
import { styles } from "../styles/styles";

export default function Perfil() {
  return (
    <View style={styles.containerPerfil}>
      <Image
        source={require("../assets/user.png")}
        style={styles.avatar}
      />
      <Text style={styles.nomeUsuario}>Douglas Lemos</Text>

      <Text style={styles.descricaoUsuario}>
        Desenvolvedor de software apaixonado por tecnologia e inovação.
      </Text>

      <View style={styles.divisor} />

    </View>
  );
}
