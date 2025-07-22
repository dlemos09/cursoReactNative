import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#e94560" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: "#e94560",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#000000", // Preto para ver claramente
          borderTopWidth: 3, // Borda mais grossa
          borderColor: "#e94560", 
          height: 80, // Mais alto
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
          color: "#ffffff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: "Usuários",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          title: "Produtos",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-bag" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
