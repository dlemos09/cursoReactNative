import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function NotFound() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://img.icons8.com/ios/100/000000/error--v1.png' }}
                style={styles.image}
            />
            <Text style={styles.title}>Página não encontrada</Text>
            <Text style={styles.subtitle}>
                Oops! Parece que você chegou a um lugar que não existe.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => {/* Navegar para Home */}}>
                <Link replace href='/' style={styles.buttonText}>Voltar para Home</Link>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        padding: 24,
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#334155',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});