import{Text, View} from "react-native";
import {styles} from "../styles/styles";
import {Link} from "expo-router";

export default function User() {
  return (
    <View style={[styles.container, {backgroundColor: "#fAf"}]}>
      <Text>User Screen</Text>
      <Link push href="/settings">Ir para Settings</Link>
    </View>
  );
}