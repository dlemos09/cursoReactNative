import {
  CameraView as ExpoCameraView,
  useCameraPermissions,
  Camera,
} from "expo-camera";
import { useState, useRef } from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/CameraStyles";
import { Pressable } from "react-native";

export default function CameraView({ onClose }) {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Precisamos da permissão para usar a câmera
        </Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function resetPhoto() {
    setPhotoUri(null);
  }

  return (
    <View style={styles.cameraContainer}>
      {!photoUri ? (
        <ExpoCameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.controlBar}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={32} color="white" />
            </TouchableOpacity>

            <View style={styles.captureContainer}>
              <TouchableOpacity
                style={styles.captureButton}
                onPress={takePhoto}
              />
            </View>

            <TouchableOpacity onPress={toggleCameraFacing}>
              <Ionicons name="camera-reverse" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </ExpoCameraView>
      ) : (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photoUri }} style={styles.previewImage} />
          <View style={styles.previewButtons}>
            <Pressable title="Tirar outra" onPress={resetPhoto}>
              <Text style={styles.textButton}>Tirar outra</Text>
            </Pressable>
            <Pressable title="Fechar" onPress={onClose}>
              <Text style={styles.textButton}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}
