import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e2e1',
  },

  imageContainer: {
    width: '100%',
    height: 300,
  },

  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 300,
  },

  card: {
    marginTop: 22,
    paddingVertical: 8,
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
    fontSize: 27,
    marginTop: 15,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  price: {
    fontSize: 19,
    fontWeight: 'bold',
  },

  titleContent: {
    fontSize: 20,
    marginTop: 27,
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

  stories: {
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
  },
});

export default styles;
