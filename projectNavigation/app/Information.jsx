// Importa componentes básicos do React Native
import { View, Text, Image } from "react-native";
// Importa os estilos personalizados do projeto
import styles from "../styles/mainStyles";

// Componente funcional que exibe informações detalhadas de um item
export default function Information({ route }) {
  // Extrai o item dos parâmetros da rota usando optional chaining (?.)
  // Se não houver item, usa valores padrão como fallback
  const item = route?.params?.item || {
    name: "App de Verão", // Nome padrão caso não venha parâmetro
    photo: require("../assets/summer.jpg"), // Imagem padrão local
    info: "Este app é uma demonstração de navegação com React Native e Drawer.", // Descrição padrão
  };

  return (
    // Container principal com estilo centralizado
    <View style={styles.container}>
      {/* Exibe a imagem do item com estilo específico */}
      <Image source={item.photo} style={styles.image} />
      {/* Exibe o nome do item como título */}
      <Text style={styles.title}>{item.name}</Text>
      {/* Exibe a informação/descrição do item */}
      <Text style={styles.description}>{item.info}</Text>
    </View>
  );
}
