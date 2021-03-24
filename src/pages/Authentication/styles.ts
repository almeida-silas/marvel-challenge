import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#e1e2e1',
  },

  title: {
    padding: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  inputContainer: {
    paddingHorizontal: '7%',
    margin: '0.2%',
  },

  button: {
    marginTop: '3%',
    marginHorizontal: '20%',
  },

  infomation: {
    left: 0,
    right: 0,
    bottom: 0,
    height: '5%',
    textAlign: 'center',
    position: 'absolute',
  },
});

export default styles;
