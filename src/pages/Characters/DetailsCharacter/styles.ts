import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e2e1',
  },

  img: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },

  imageContainer: {
    width: '100%',
    height: 300,
  },

  title: {
    marginTop: 15,
    fontSize: 22,
    letterSpacing: 1,
  },

  paragraph: {
    padding: 15,
    textAlign: 'center',
  },

  description: {
    marginTop: 22,
    fontSize: 19,
    textAlign: 'center',
  },

  card: {
    flex: 1,
    paddingTop: 30,
  },

  participations: {
    fontSize: 19,
    marginBottom: 12,
    textAlign: 'center',
  },

  header: {
    flex: 1,
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  stats: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '11%',
  },

  appbar: {
    backgroundColor: '#ffff',
    marginBottom: '-8%',
    elevation: 9,
  },

  participationsContainer: {
    paddingVertical: 10,
    marginVertical: 7,
    padding: 35,
    borderRadius: 11,
    backgroundColor: '#ffff',
    elevation: 4,
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
