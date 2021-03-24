import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import ICreators from '../../Interfaces/ICreators';
import api from '../../services/api';
import styles from './styles';

const Creators: React.FC = () => {
  const [creators, setCreators] = useState<ICreators[]>([]);

  useEffect(() => {
    getCreators();
  }, []);

  const getCreators = async () => {
    try {
      const { data } = await api.get('/creators');

      setCreators(data.data.results);
    } catch (error) {
      return Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo, hein!?',
      );
    }
  };

  return <View />;
};

export default Creators;
