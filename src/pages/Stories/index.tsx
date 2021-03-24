import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import IStories from '../../Interfaces/IStories';
import Carousel from './components/Carousel';
import styles from './styles';

import api from '../../services/api';

const Stories: React.FC = () => {
  const [stories, setStories] = useState<IStories[]>([]);

  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    try {
      const { data } = await api.get('/stories');

      setStories(data.data.results);
    } catch (error) {
      return Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo, hein!?',
      );
    }
  };

  return <View />;
};

export default Stories;
