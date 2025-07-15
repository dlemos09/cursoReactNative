import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  FlatList,
} from "react-native";
import logo from "../assets/images/check.png";
import { colors } from "../constants/colors";
import Task from "../components/Task";
import React, { useState } from "react";

const initialTasks = [
  { id: 1, completed: true, text: "Estudar React Native" },
  { id: 2, completed: false, text: "Fazer compras" },
  { id: 3, completed: false, text: "Lavar o carro" },
];

export default function RootLayout() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setNewTask] = useState("");

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      completed: false,
      text,
    };
    setTasks([...tasks, newTask]);
    setNewTask(""); // Limpa o campo de entrada após adicionar a tarefa
    Alert.alert("Tarefa adicionada!", `Você adicionou: ${text}`);
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.textContainer}>
        <Text style={style.title}>Minhas Tarefas</Text>
        <Image source={logo} style={style.image} />
      </View>

      <View style={style.rowContainer}>
        {/* <TextInput value={text} onChange={(e) => setNewTask(e.target.value)} style={style.input} placeholder="Digite uma tarefa" /> */}
        {/* Como não temos DOM, usamos apenas a função. */}

        <TextInput
          value={text}
          onChangeText={setNewTask}
          style={style.input}
          placeholder="Digite uma tarefa"
        />

        <Pressable
          // onPress={() => Alert.alert(text)}
          onPress={addTask}
          style={({ pressed }) => [
            style.button,
            {
              backgroundColor: pressed ? "rgb(13, 103, 212)" : colors.primary,
            },
          ]}
        >
          {({ pressed }) => (
            <Text
              style={[
                style.buttonText,
                { color: pressed ? "#FFD700" : "white" },
              ]}
            >
              +
            </Text>
          )}
        </Pressable>
      </View>
      {/* tentar mudar a cor do botão quando pressionado */}

      {/* <View>
     Não é a maneira correta de renderizar uma lista de itens no React Native.
     {tasks.map(item => <Text>{item.text}</Text>)}
     </View> */}

      <FlatList
        data={tasks}
        // keyExtractor={(item)=> item.id} Não é necessário o id, mas é uma boa prática
        renderItem={({ item }) => (
          <Task text={item.text} initialCompleted={item.completed} />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    alignSelf: "center",
    width: 50,
    height: 50,
  },
  title: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
  },
  //padrão camelCase
  textContainer: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    padding: 10,
  },

  mainContainer: {
    marginTop: 100,
    marginHorizontal: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.bordaColor,
    borderRadius: 50,
    padding: 18,
    marginVertical: 20,
    flexGrow: 1,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    gap: 10,
  },
});
