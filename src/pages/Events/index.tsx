import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import IEvents from '../../Interfaces/IEvents';
import api from '../../services/api';
import styles from './styles';

const Events: React.FC = () => {
  const [events, setEvents] = useState<IEvents[]>([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const { data } = await api.get('/events');

      setEvents(data.data.results);
    } catch (error) {
      return Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo, hein!?',
      );
    }
  };

  return <View />;
};

export default Events;
