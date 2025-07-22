import { Text, View } from "react-native";
import { styles } from "../../styles/styles";

export default function Home() {
  return (
    <View style={[styles.container, { backgroundColor: "#fAfEDB" }]}>
      <Text>Home Screen</Text>
    </View>
  );
}
