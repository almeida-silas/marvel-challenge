import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: '5%',
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
    maxHeight: 200,
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

  contentFooter: {
    padding: '7.5%',
    maxHeight: 124,
  },

  button: {
    backgroundColor: '#3949ab',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
