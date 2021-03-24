import React, { useEffect, useState } from 'react';

import { Alert, View } from 'react-native';

import IComics from '../../Interfaces/IComics';

import Carousel from './components/Carousel';
import styles from './styles';

import api from '../../services/api';

const Comics: React.FC = () => {
  const [comics, setComics] = useState<IComics[]>([]);

  useEffect(() => {
    getComics();
  }, []);

  const getComics = async () => {
    try {
      const { data } = await api.get('/comics');

      setComics(data.data.results);
    } catch (error) {
      return Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo, hein!?',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Carousel comic={comics} />
    </View>
  );
};

export default Comics;
