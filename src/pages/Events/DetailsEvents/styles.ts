import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e2e1',
  },

  imgContainer: {
    width: '100%',
    height: 320,
  },

  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 320,
  },

  card: {
    padding: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e2e1',
  },

  date: {
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  title: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  titleContent: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  description: {
    marginTop: 10,
    textAlign: 'justify',
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100%',
  },

  appbar: {
    backgroundColor: '#ffff',
  },

  content: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    marginVertical: 20,
    marginHorizontal: 5,
    borderRadius: 11,
    backgroundColor: '#ffff',
    elevation: 4,
  },

  creators: {
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
  },
});

export default styles;
