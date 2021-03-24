import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import ISeries from '../../Interfaces/ISeries';
import Carousel from './components/Carousel';
import styles from './styles';
import api from '../../services/api';

const Series: React.FC = () => {
  const [series, setSeries] = useState<ISeries[]>([]);

  useEffect(() => {
    getSeries();
  }, []);

  const getSeries = async () => {
    try {
      const { data } = await api.get('/series');

      setSeries(data.data.results);
    } catch (error) {
      return Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo, hein!?',
      );
    }
  };

  return <View />;
};

export default Series;
