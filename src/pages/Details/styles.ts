import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f2fd',
  },

  titlePage: {
    position: 'absolute',
    right: '10%',
  },

  img: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },

  title: {
    marginTop: 15,
    letterSpacing: 1,
  },

  description: {
    marginVertical: 10,
    textAlign: 'center',
  },

  card: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
  },

  participations: {
    fontSize: 19,
    marginBottom: 12,
    textAlign: 'center',
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  stats: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '11%',
  },

  appbar: {
    backgroundColor: '#ffff',
  },

  participationsContainer: {
    paddingVertical: 10,
    borderBottomWidth: 0.4,
  },

  button: {
    width: 250,
    height: 40,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});

export default styles;
