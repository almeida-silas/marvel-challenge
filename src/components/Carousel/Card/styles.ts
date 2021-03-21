import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: '35%',
    backgroundColor: '#ede7f6',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  content: {
    marginVertical: 8,
    maxHeight: 150,
  },

  title: {
    marginTop: 15,
  },

  subtitle: {
    marginTop: 10,
  },

  actions: {
    backgroundColor: '#0000',
  },

  button: {
    backgroundColor: '#3949ab',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
