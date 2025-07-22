import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#fefefe",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#e94560",
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 24,
    color: "#555",
  },

  // PERFIL
  containerPerfil: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#f5f6fa",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nomeUsuario: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222",
  },
  divisor: {
    height: 1,
    backgroundColor: "#ccc",
    width: "80%",
    marginVertical: 30,
  },
  descricaoUsuario: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
});
