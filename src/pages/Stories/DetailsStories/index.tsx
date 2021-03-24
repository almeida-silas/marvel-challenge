import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, View } from 'react-native';
import { Appbar, Card, Paragraph, Title } from 'react-native-paper';
import { NavigationProp, ParamListBase } from '@react-navigation/core';
import IStories from '../../../Interfaces/IStories';
import IRoute from './IRoute';
import api from '../../../services/api';
import styles from './styles';
import Loader from '../../../components/Loader';

interface IProps {
  route: IRoute;
  navigation: NavigationProp<ParamListBase>;
}

const DetailsStories: React.FC<IProps> = ({ route, navigation }: IProps) => {
  const [stories, setStories] = useState<IStories>(Object);
  const { storiesID } = route.params;

  useEffect(() => {
    getDetailsStories(storiesID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storiesID]);

  const getDetailsStories = async (id: number) => {
    try {
      const { data } = await api.get(`/stories/${id}`);
      console.log(storiesID);
      setStories(data.data.results[0]);
    } catch (error) {
      if (error.response.status === 404) {
        Alert.alert('Ops!', 'Não foi possível encontrar essa historinha.');

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
        <Appbar.Content title={stories.title} />
      </Appbar.Header>

      <View style={styles.container}>
        {Object.keys(stories).length ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              {stories.thumbnail && (
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: `${stories.thumbnail.path}.${stories.thumbnail.extension}`,
                    }}
                  />
                </View>
              )}

              <Card.Content style={styles.content}>
                <Title style={styles.title}>
                  {stories.title}
                  {console.log(stories.title)}
                </Title>

                {stories.description.length > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>Descrição</Paragraph>
                    <Paragraph style={styles.description}>
                      {stories.description}
                    </Paragraph>
                  </>
                )}

                {stories.comics && stories.comics.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>
                      Histórias em quadrinho
                    </Paragraph>
                    {stories.comics.items.map(storie => (
                      <View key={storie.resourceURI} style={styles.stories}>
                        <Paragraph>{storie.name}</Paragraph>
                      </View>
                    ))}
                  </>
                )}

                {stories.characters && stories.characters.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>
                      Personagens
                    </Paragraph>
                    {stories.characters.items.map(character => (
                      <View key={character.resourceURI} style={styles.stories}>
                        <Paragraph>Nome: {character.name}</Paragraph>
                      </View>
                    ))}
                  </>
                )}

                {stories.creators && stories.creators.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>Criadores</Paragraph>
                    {stories.creators.items.map(creator => (
                      <View key={creator.resourceURI} style={styles.stories}>
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

export default DetailsStories;
