import React, { useEffect, useState } from 'react';

import { Button } from 'react-native-paper';
import { View, Alert } from 'react-native';
import Loader from 'react-native-spinkit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';

import ICharacter from '../../Interfaces/ICharacter';

import Carousel from '../../components/Carousel';
import styles from './styles';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCharacters(offset);
  }, [offset]);

  const getCharacters = async (page: number) => {
    setLoading(true);

    try {
      const { data } = await api.get('/characters', {
        params: { offset: page },
      });

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
        <Loader type="WanderingCubes" color="#3949ab" size={100} />
      ) : characters.length ? (
        <>
          <View>
            <Carousel characters={characters} />
          </View>

          <View style={styles.containerButton}>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => setOffset(offset - 20)}>
              <Icon name="arrow-left" />
            </Button>

            <Button
              style={styles.button}
              mode="contained"
              onPress={() => setOffset(offset + 20)}>
              <Icon name="arrow-right" />
            </Button>
          </View>
        </>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Home;
