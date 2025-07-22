import { View, StyleSheet, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import React, { useState } from "react";


export default function Task({ text, initialCompleted, deleteTask }) {
  // Aqui você pode adicionar a lógica para marcar a tarefa como concluída
  const [completed, setCompleted] = useState(initialCompleted);



  return (
    
      <View style={styles.rowContainer}>
        <Pressable onPress={() => setCompleted(!completed)}>
          {/* <Ionicons name="checkmark-circle" size={32} color={colors.primary} /> */}
          <Ionicons
            name="checkmark-circle"
            size={32}
            color={completed ? colors.primary : "gray"}
          />
        </Pressable>
        {/* <Text onPress={deleteTask}>{text}</Text> Apenas para teste se a tarefa foi deletada */}
        <Text>{text}</Text>
      </View>
    
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
