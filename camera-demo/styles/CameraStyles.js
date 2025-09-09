import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  // Container geral da página (camera.jsx)
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  // Botão de ícone de câmera
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e90ff",
    padding: 20,
    borderRadius: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

  // Container da câmera (CameraView)
  cameraContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
    width: width,
    height: height,
  },

  // Estilo da barra de controle inferior (controlBar)
  controlBar: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly", // Espaço igual entre os três
    alignItems: "center",
    paddingHorizontal: 20,
  },

  iconButtonCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: "#fff",
    backgroundColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
  },

  // Botão para inverter câmera (caso usado fora da controlBar)
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Estilo de permissão
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000",
  },
  permissionText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },

  // Estilo da pré-visualização da foto
  previewButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },

  textButton: {
    backgroundColor: "#ff1e1e",
    padding: 10,
    borderRadius: 5,
    color: "#fff",
    fontSize: 20,
  },
});

export default styles;
