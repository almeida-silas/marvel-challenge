import React, { useEffect, useState } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/core';
import { Alert, View, ScrollView, Image } from 'react-native';
import { Appbar, Title, Paragraph } from 'react-native-paper';
import ICharacter from '../../../Interfaces/ICharacter';
import { goToComicID } from '../functions/goToComicID';
import { goToSeriesID } from '../functions/goToSeriesID';
import { goToEventsID } from '../functions/goToEventsID';
import { goToStoriesID } from '../functions/goToStoriesID';
import CardInformations from '../../../components/CardInformations';
import Loader from '../../../components/Loader';
import IRoute from './IRoute';
import styles from './styles';
import api from '../../../services/api';

interface IProps {
  route: IRoute;
  navigation: NavigationProp<ParamListBase>;
}

const DetailsCharacter: React.FC<IProps> = ({ route, navigation }: IProps) => {
  const [character, setCharacter] = useState<ICharacter>(Object);
  const { characterID } = route.params;

  useEffect(() => {
    if (character.id === characterID) {
      return;
    }

    getDetailsCharacter(characterID);
  }, [character.id, characterID]);

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
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={character.name} />
      </Appbar.Header>

      <View style={styles.container}>
        {Object.keys(character).length ? (
          <ScrollView showsVerticalScrollIndicator={false} style={styles.card}>
            <View style={styles.header}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                  }}
                />
              </View>
              {character.description.length > 0 && (
                <View>
                  <Paragraph style={styles.description}>Descrição</Paragraph>
                  <Paragraph style={styles.paragraph}>
                    {character.description}
                  </Paragraph>
                </View>
              )}
            </View>

            <View style={styles.stats}>
              <ScrollView>
                {character.stories.available > 0 && (
                  <View style={styles.participationsContainer}>
                    <Title style={styles.participations}>Historinhas</Title>
                    {character.stories.items.map(item => (
                      <CardInformations
                        key={item.resourceURI}
                        item={item}
                        onPress={() =>
                          goToStoriesID(item.resourceURI, navigation)
                        }
                      />
                    ))}
                  </View>
                )}

                {character.series.available > 0 && (
                  <View style={styles.participationsContainer}>
                    <Title style={styles.participations}>Séries</Title>
                    {character.series.items.map(item => (
                      <CardInformations
                        key={item.resourceURI}
                        item={item}
                        onPress={() =>
                          goToSeriesID(item.resourceURI, navigation)
                        }
                      />
                    ))}
                  </View>
                )}

                {character.events.available > 0 && (
                  <View style={styles.participationsContainer}>
                    <Title style={styles.participations}>Eventos</Title>
                    {character.events.items.map(item => (
                      <CardInformations
                        key={item.resourceURI}
                        item={item}
                        onPress={() =>
                          goToEventsID(item.resourceURI, navigation)
                        }
                      />
                    ))}
                  </View>
                )}

                {character.comics.available > 0 && (
                  <View style={styles.participationsContainer}>
                    <Title style={styles.participations}>
                      Histórias em quadrinhos
                    </Title>
                    {character.comics.items.map(item => (
                      <CardInformations
                        key={item.resourceURI}
                        item={item}
                        onPress={() =>
                          goToComicID(item.resourceURI, navigation)
                        }
                      />
                    ))}
                  </View>
                )}
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

export default DetailsCharacter;
