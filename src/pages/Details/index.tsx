import React, { useEffect, useState } from 'react';

import { NavigationProp, ParamListBase } from '@react-navigation/core';

import { Alert, View, ScrollView } from 'react-native';
import { Card, Appbar, Title, Paragraph } from 'react-native-paper';

import IRoute from './IRoute';
import ICharacter from '../../Interfaces/ICharacter';

import CardInformations from '../../components/CardInformations';
import Loader from '../../components/Loader';
import styles from './styles';

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

      setCharacter(data.data.results[0]);
    } catch (error) {
      Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo, hein!?',
      );
    }
  };

  return (
    <>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={goBack} />
      </Appbar.Header>

      <View style={styles.container}>
        {Object.keys(character).length ? (
          <ScrollView showsVerticalScrollIndicator={false} style={styles.card}>
            <View style={styles.header}>
              <Card.Cover
                style={styles.img}
                source={{
                  uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                }}
              />
              <Title style={styles.title}>{character.name}</Title>
              <Paragraph style={styles.description}>
                {character.description}
              </Paragraph>
            </View>

            <View style={styles.stats}>
              <Title style={styles.title}>Participações</Title>

              <ScrollView>
                <View style={styles.participationsContainer}>
                  <Title style={styles.participations}>Histórias</Title>
                  {character.series.items.map(item => (
                    <CardInformations key={item.resourceURI} item={item} />
                  ))}
                </View>

                <View style={styles.participationsContainer}>
                  <Title style={styles.participations}> Séries</Title>
                  {character.series.items.map(item => (
                    <CardInformations key={item.resourceURI} item={item} />
                  ))}
                </View>

                <View style={styles.participationsContainer}>
                  <Title style={styles.participations}> Eventos</Title>
                  {character.events.items.map(item => (
                    <CardInformations key={item.resourceURI} item={item} />
                  ))}
                </View>

                <View style={styles.participationsContainer}>
                  <Title style={styles.participations}>
                    Histórias em quadrinhos
                  </Title>
                  {character.comics.items.map(item => (
                    <CardInformations key={item.resourceURI} item={item} />
                  ))}
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        ) : (
          <Loader />
        )}
      </View>
    </>
  );
};

export default Details;
