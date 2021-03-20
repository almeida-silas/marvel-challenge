import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, FlatList, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import ICharacters from '../../Interfaces/ICharacters';
import api from '../../services/api';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacters[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (refreshing) {
      return;
    }

    getCharacters();
  }, [refreshing]);

  const goToDetails = (characterID: number) => {
    return navigation.navigate('Details', {
      characterID,
    });
  };

  const getCharacters = async () => {
    try {
      const { data } = await api.get('/characters');
      console.log('asd');
      setCharacters(data.data.results);

      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);

      Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo hein!',
      );
    }
  };

  return (
    <View>
      {characters.length ? (
        <FlatList
          data={characters}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
          keyExtractor={character => String(character.id)}
          renderItem={({ item: character }) => (
            <View>
              <Image
                source={{
                  height: 150,
                  width: 220,
                  uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                }}
              />
              <Text>{character.name}</Text>

              <Button onPress={() => goToDetails(character.id)}>
                Mais detalhes
              </Button>
            </View>
          )}
        />
      ) : (
        <Text>Olá? Tem alguém aí?</Text>
      )}
    </View>
  );
};

export default Home;
