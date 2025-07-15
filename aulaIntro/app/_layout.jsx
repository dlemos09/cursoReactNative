import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';

// Componente principal da aula
export default function AulaIntro() {
  // Estado para armazenar o texto digitado
  const [nome, setNome] = React.useState('');

  // Função chamada ao pressionar o botão
  const mostrarAlerta = () => {
    Alert.alert('Olá!', `Bem-vindo, ${nome || 'visitante'}!`);
  };

  return (
    // ScrollView permite rolar o conteúdo na tela
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>Introdução ao React Native</Text>

      {/* Texto explicativo */}
      <Text style={styles.texto}>
        React Native permite criar aplicativos móveis usando JavaScript e React.
      </Text>

      {/* Entrada de texto controlada por estado */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Botão que chama uma função ao ser pressionado */}
      <Button title="Mostrar Alerta" onPress={mostrarAlerta} />

      {/* Exemplo de componente customizado */}
      <Saudacao nome={nome} />

      {/* Explicação sobre componentes */}
      <Text style={styles.texto}>
        Componentes são blocos reutilizáveis de interface. Veja o exemplo acima!
      </Text>

      <View>
        <Text style={styles.texto}>
          Este é um exemplo simples de como usar React Native para criar uma interface.
        </Text>
        <Text style={styles.texto}>
          Você pode adicionar mais componentes e lógica conforme necessário.
        </Text>
      </View>
    </ScrollView>
  );
}

// Componente customizado que recebe props
function Saudacao({ nome }) {
  return (
    <Text style={styles.saudacao}>
      {nome ? `Olá, ${nome}!` : 'Olá! Digite seu nome acima.'}
    </Text>
  );
}

// Estilos simples usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  texto: {
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    marginVertical: 12,
    backgroundColor: '#fff',
  },
  saudacao: {
    fontSize: 18,
    color: '#333',
    marginVertical: 12,
  },
});