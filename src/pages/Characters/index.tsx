import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import Loader from '../../components/Loader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ICharacter from '../../Interfaces/ICharacter';
import Carousel from './components/Carousel';
import styles from './styles';

import api from '../../services/api';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
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
      setTotal(data.data.total - 1);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo hein!',
      );
    }
  };

  const goToNextPage = () => {
    if (offset === total) {
      return;
    }
    let page = offset + 20;
    if (page > total) {
      page = total;
    }
    setOffset(page);
  };

  const goToPreviousPage = () => {
    if (offset === 0) {
      return;
    }
    let page = offset - 20;
    if (page < 0) {
      page = 0;
    }
    setOffset(page);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        characters.length > 0 && (
          <>
            <View>
              <Carousel characters={characters} />
            </View>

            <View style={styles.containerButton}>
              {offset > 0 && (
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={goToPreviousPage}>
                  <Icon name="arrow-left" />
                </Button>
              )}

              {total !== offset && (
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={goToNextPage}>
                  <Icon name="arrow-right" />
                </Button>
              )}
            </View>
          </>
        )
      )}
    </View>
  );
};

export default Characters;
