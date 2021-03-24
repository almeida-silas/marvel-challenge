import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, View } from 'react-native';
import { Appbar, Card, Paragraph, Title } from 'react-native-paper';
import { NavigationProp, ParamListBase } from '@react-navigation/core';
import IComics from '../../../Interfaces/IComics';
import IRoute from './IRoute';
import api from '../../../services/api';
import Loader from '../../../components/Loader';
import styles from './styles';

interface IProps {
  route: IRoute;
  navigation: NavigationProp<ParamListBase>;
}

const DetailsComics: React.FC<IProps> = ({ route, navigation }: IProps) => {
  const [comic, setComic] = useState<IComics>(Object);
  const { comicID } = route.params;

  useEffect(() => {
    if (comic.id === comicID) {
      return;
    }

    getDetailsComics(comicID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comic.id, comicID]);

  const getDetailsComics = async (id: number) => {
    try {
      const { data } = await api.get(`/comics/${id}`);

      setComic(data.data.results[0]);
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
        <Appbar.Content title={comic.title} />
      </Appbar.Header>

      <View style={styles.container}>
        {Object.keys(comic).length ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                  }}
                />
              </View>

              <Card.Content style={styles.content}>
                <Title style={styles.title}>{comic.title}</Title>
                {comic.dates.map(date => (
                  <View key={date.date}>
                    {date.type === 'onsaleDate' && (
                      <Paragraph style={styles.date}>
                        Data de venda: {date.date.substr(0, 4)}
                      </Paragraph>
                    )}
                    {date.type === 'unlimitedDate' && (
                      <Paragraph style={styles.date}>
                        Data ilimitada: {date.date.substr(0, 4)}
                      </Paragraph>
                    )}
                  </View>
                ))}

                {comic.description && (
                  <>
                    <Paragraph style={styles.titleContent}>Descrição</Paragraph>
                    <Paragraph style={styles.description}>
                      {comic.description}
                    </Paragraph>
                  </>
                )}

                {comic.creators.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>Criadores</Paragraph>
                    {comic.creators.items.map(creator => (
                      <View key={creator.resourceURI} style={styles.creators}>
                        <Paragraph>Nome: {creator.name}</Paragraph>
                        <Paragraph>Função: {creator.role}</Paragraph>
                      </View>
                    ))}
                  </>
                )}

                {comic.creators.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>
                      Outros personagens presente neste quadrinho
                    </Paragraph>
                    {comic.characters.items.map(character => (
                      <View key={character.resourceURI} style={styles.creators}>
                        <Paragraph>{character.name}</Paragraph>
                      </View>
                    ))}
                  </>
                )}

                {comic.prices.length > 0 && (
                  <View style={styles.card}>
                    <Paragraph style={styles.price}>Preços</Paragraph>

                    {comic.prices.map((price, index) => (
                      <View key={index}>
                        {price.type === 'printPrice' && (
                          <Paragraph key={index}>
                            Impressão: {price.price} $
                          </Paragraph>
                        )}
                      </View>
                    ))}
                  </View>
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

export default DetailsComics;
