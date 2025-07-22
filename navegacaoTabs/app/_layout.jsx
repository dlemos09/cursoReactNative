import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#e94560'/>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#e94560" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found"  options={{ headerTitle: "Erro" }}/> */}
      </Stack>
    </>
  );
}
