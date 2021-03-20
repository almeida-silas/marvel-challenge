import React, { useEffect, useState } from 'react';

import { NavigationProp, ParamListBase } from '@react-navigation/core';

import { Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import IRoute from '../../Interfaces/IRoutes';
import ICharacter from '../../Interfaces/ICharacters';

import api from '../../services/api';

interface IProps {
  route: IRoute;
  navigation: NavigationProp<ParamListBase>;
}

const Details: React.FC<IProps> = ({ route, navigation }: IProps) => {
  const [character, setCharacter] = useState<ICharacter>(Object);
  const { characterID } = route.params;

  useEffect(() => {
    if (character.id === characterID) {
      return;
    }

    getDetailsCharacter(characterID);
  }, [character.id, characterID]);

  const goBack = () => {
    return navigation.goBack();
  };

  const getDetailsCharacter = async (id: number) => {
    try {
      const { data } = await api.get(`/characters/${id}`);

      setCharacter(data.data.results);
    } catch (error) {
      Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo, hein!?',
      );
    }
  };

  return Object.keys(character).length ? (
    <View>
      <Text>DETAILS PAGE</Text>

      <Button onPress={goBack}>Voltar</Button>
    </View>
  ) : (
    <Text>Não encontrei nada desse personagem :(</Text>
  );
};

export default Details;
