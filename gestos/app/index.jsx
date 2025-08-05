import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DraggableSquare from "../components/DraggableSquare";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arraste o Quadrado 👇</Text>
      <DraggableSquare />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
