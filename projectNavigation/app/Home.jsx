import { View, Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import styles from '../styles/mainStyles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/summer.jpg')} style={styles.image} />

      <Text style={styles.title}>Bem-vindo ao App de Verão!</Text>

      <Text style={styles.description}>
        Veja seus contatos com estilo, cores tropicais e muita energia ☀️
      </Text>

      <Link href="/Contacts" asChild> 
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ver Contatos</Text>
        </Pressable>
      </Link>
    </View>
  );
}
