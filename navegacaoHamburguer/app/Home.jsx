import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../styles/styles";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.containerHome}>
      <Text style={styles.titulo}>Bem-vindo ao App</Text>
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={styles.avatar}
      />
      <Text style={styles.subtitulo}>Navegue usando o menu lateral</Text>

      
    </View>
  );
}
