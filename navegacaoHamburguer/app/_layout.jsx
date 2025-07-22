import { StatusBar } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";

const CustomDrawerContent = () => {
  const router = useRouter();
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Home"
       icon={({color}) => <FontAwesome name="home" size={24} color={color} />}
       onPress={() => router.push("/Home")}/>
      <DrawerItem label="Perfil"
      icon={({color}) => <FontAwesome name="user" size={24} color={color} />}
      onPress={() => router.push("/Perfil")}/>
      
    </DrawerContentScrollView>
  );
};

export default function RootLayout() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#e94560'/>
      <Drawer
        drawerContent={() => <CustomDrawerContent/>}
        screenOptions={{
          headerStyle: { backgroundColor: "#e94560" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
      </Drawer>
    </>
  );
}