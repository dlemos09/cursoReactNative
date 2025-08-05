import { View, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactCard from '../components/ContactCard';
import ContactDetails from './Information';
import { contactList } from '../constants/data';
import styles from '../styles/mainStyles';

const Stack = createNativeStackNavigator();

function ContactListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={contactList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactCard item={item} onPress={() => navigation.navigate('Detalhes', { item })} />
        )}
      />
    </View>
  );
}

export default function Contacts() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Contatos" component={ContactListScreen} />
      <Stack.Screen name="Detalhes" component={ContactDetails} />
    </Stack.Navigator>
  );
}
