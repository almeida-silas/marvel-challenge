import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f2fd',
  },

  containerButton: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 15,
    justifyContent: 'space-around',
  },

  button: {
    height: 35,
    width: 35,
    backgroundColor: '#3949ab',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
