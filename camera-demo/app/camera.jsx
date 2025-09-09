import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CameraView from "../components/CameraView";
import styles from "../styles/CameraStyles";

export default function CameraPage() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <View style={styles.container}>
      {showCamera ? (
        <CameraView onClose={() => setShowCamera(false)} />
      ) : (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setShowCamera(true)}
        >
          <Ionicons name="camera" size={60} color="#fff" />
          <Text style={styles.text}>Abrir Câmera</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
