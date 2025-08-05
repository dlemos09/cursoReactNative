import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbe6',
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe4b5',
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6f61',
  },
  title: {
    fontSize: 24,
    marginVertical: 12,
    color: '#ff8c00',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  description: {
    fontSize: 16,
    color: '#444',
    marginTop: 8,
  },
    button: {
    backgroundColor: '#ff8c42',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 24,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});
