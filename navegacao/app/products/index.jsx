import{Text, View} from "react-native";
import {styles} from "../../styles/styles";
import {Link} from "expo-router";

export default function Products() {
  return (
    <View style={[styles.container, {backgroundColor: "#12abf7ff"}]}>
      <Text>Products Screen</Text>
      <Link push href="/">Home</Link>

        <Link push href="/products/1">Produto 1</Link>
        <Link push href="/products/2">Produto 2</Link>
        <Link push href="/products/3">Produto 3</Link>
        <Link push href="/asjskdfnkjsdnkj">Página de Erro</Link>
    </View>
  );
}