import React, { useEffect, useState } from 'react';

import { View, FlatList, Alert } from 'react-native';
import Loader from 'react-native-spinkit';

import ICharacters from '../../Interfaces/ICharacters';
import api from '../../services/api';

import Card from '../../components/Card';
import styles from './styles';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    setLoading(true);

    try {
      const { data } = await api.get('/characters');

      setCharacters(data.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo hein!',
      );
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader type="WanderingCubes" color="#ffff" size={100} />
      ) : (
        <FlatList
          data={characters}
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          keyExtractor={character => String(character.id)}
          renderItem={({ item: character }) => <Card character={character} />}
        />
      )}
    </View>
  );
};

export default Home;
