import{Text, View} from "react-native";
import {styles} from "../../styles/styles";
import {Link, useLocalSearchParams} from "expo-router";

export default function Products() {

  const { id } = useLocalSearchParams();

  return (
    <View style={[styles.container, {backgroundColor: "#8afc93ff"}]}>
      <Text>Details Screen</Text>
      <Text>Product ID: {id}</Text>
      <Link push href="/products">Produtos</Link>
    </View>
  );
}