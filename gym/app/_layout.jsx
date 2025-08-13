// ============================================================================
// _layout.jsx - Configuração principal de navegação do aplicativo
// Funcionalidades: Tab Navigator, Stack Navigator, temas, ícones
// ============================================================================

import React, { useState } from "react";
// Navegação por abas (tabs) na parte inferior
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Navegação em pilha (stack) para transições entre telas
import { createStackNavigator } from "@react-navigation/stack";
// Biblioteca de ícones do Expo
import { Ionicons } from "@expo/vector-icons";

// Importação das telas do aplicativo
import HomeScreen from "./tabs/HomeScreen";
import AddressScreen from "./tabs/AddressScreen";
import SettingsScreen from "./tabs/SettingsScreen";
import NearbyGymsScreen from "./tabs/NearbyGymsScreen";
// Importação dos temas (claro e escuro)
import { lightTheme, darkTheme } from "../styles/themes";

// ==================== CRIAÇÃO DOS NAVEGADORES ====================
const Tab = createBottomTabNavigator(); // Navegador de abas
const Stack = createStackNavigator(); // Navegador de pilha

// ==================== STACK NAVIGATOR PARA A HOME ====================
// Função que cria um stack navigator para a aba Home
// Permite navegação entre HomeScreen e AddressScreen
function HomeStack({ theme }) {
  return (
    <Stack.Navigator>
      {/* Tela principal da Home */}
      <Stack.Screen
        name="HomeMain"
        options={{ headerShown: false }} // Oculta o header
        component={(props) => <HomeScreen {...props} theme={theme} />}
      />
      {/* Tela de cadastro de endereço */}
      <Stack.Screen
        name="CadastroEndereco"
        options={{ title: "Cadastro de Endereço" }}
        component={(props) => <AddressScreen {...props} theme={theme} />}
      />
    </Stack.Navigator>
  );
}

// ==================== COMPONENTE PRINCIPAL ====================
export default function App() {
  // ==================== ESTADO DOS TEMAS ====================
  const [isDarkMode, setIsDarkMode] = useState(false); // Controla tema atual
  const theme = isDarkMode ? darkTheme : lightTheme; // Seleciona tema baseado no estado
  const toggleTheme = () => setIsDarkMode(!isDarkMode); // Alterna entre temas

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Configurações") iconName = "settings";
          else if (route.name === "Academias Próximas") iconName = "map";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: theme.tabBar },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        headerStyle: { backgroundColor: theme.tabBar },
        headerTintColor: theme.text,
      })}
    >
      <Tab.Screen name="Home">{() => <HomeStack theme={theme} />}</Tab.Screen>
      <Tab.Screen name="Academias Próximas">
        {() => <NearbyGymsScreen theme={theme} />}
      </Tab.Screen>
      <Tab.Screen name="Configurações">
        {() => (
          <SettingsScreen
            theme={theme}
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
