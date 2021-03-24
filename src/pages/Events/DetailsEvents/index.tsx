import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, View } from 'react-native';
import { Appbar, Card, Paragraph, Title } from 'react-native-paper';
import { NavigationProp, ParamListBase } from '@react-navigation/core';
import IRoute from './IRoute';
import IEvents from '../../../Interfaces/IEvents';
import Loader from '../../../components/Loader';
import styles from './styles';
import api from '../../../services/api';

interface IProps {
  route: IRoute;
  navigation: NavigationProp<ParamListBase>;
}

const DetailsEvents: React.FC<IProps> = ({ route, navigation }: IProps) => {
  const [events, setEvents] = useState<IEvents>(Object);
  const { eventsID } = route.params;

  useEffect(() => {
    if (events.id === eventsID) {
      return;
    }

    getDetailsEvents(eventsID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events.id, eventsID]);

  const getDetailsEvents = async (id: number) => {
    try {
      const { data } = await api.get(`/events/${id}`);

      setEvents(data.data.results[0]);
    } catch (error) {
      if (error.response.status === 404) {
        Alert.alert('Ops!', 'Não foi possível encontrar esse quadrinho.');

        return navigation.goBack();
      }

      return Alert.alert(
        'Erro interno',
        'Houve um erro ao buscar os dados. Talvez resolva se reiniciar o aplicativo, hein!?',
      );
    }
  };

  return (
    <>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={events.title} />
      </Appbar.Header>

      <View style={styles.container}>
        {Object.keys(events).length ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${events.thumbnail.path}.${events.thumbnail.extension}`,
                  }}
                />
              </View>

              <Card.Content style={styles.content}>
                <Title style={styles.title}>{events.title}</Title>

                {events.description && (
                  <>
                    <Paragraph style={styles.titleContent}>Descrição</Paragraph>
                    <Paragraph style={styles.description}>
                      {events.description}
                    </Paragraph>
                  </>
                )}

                {events.characters.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>
                      Personagens
                    </Paragraph>
                    {events.characters.items.map(character => (
                      <View key={character.resourceURI} style={styles.creators}>
                        <Paragraph>Nome: {character.name}</Paragraph>
                      </View>
                    ))}
                  </>
                )}

                {events.comics.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>
                      Histórias em quadrinhos
                    </Paragraph>
                    {events.comics.items.map(comic => (
                      <View key={comic.resourceURI} style={styles.creators}>
                        <Paragraph>Nome: {comic.name}</Paragraph>
                      </View>
                    ))}
                  </>
                )}

                {events.creators.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>Criadores</Paragraph>
                    {events.creators.items.map(creator => (
                      <View key={creator.resourceURI} style={styles.creators}>
                        <Paragraph>Nome: {creator.name}</Paragraph>
                        <Paragraph>Função: {creator.role}</Paragraph>
                      </View>
                    ))}
                  </>
                )}
              </Card.Content>
            </View>
          </ScrollView>
        ) : (
          <Loader />
        )}
      </View>
    </>
  );
};

export default DetailsEvents;
