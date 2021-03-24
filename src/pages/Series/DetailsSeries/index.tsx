import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, View } from 'react-native';
import { Appbar, Card, Paragraph, Title } from 'react-native-paper';
import { NavigationProp, ParamListBase } from '@react-navigation/core';
import ISeries from '../../../Interfaces/ISeries';
import IRoute from './IRoute';
import api from '../../../services/api';
import Loader from '../../../components/Loader';
import styles from './styles';

interface IProps {
  route: IRoute;
  navigation: NavigationProp<ParamListBase>;
}

const DetailsSeries: React.FC<IProps> = ({ route, navigation }: IProps) => {
  const [series, setSeries] = useState<ISeries>(Object);
  const { seriesID } = route.params;

  useEffect(() => {
    getDetailsSeries(seriesID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [series.id, seriesID]);

  const getDetailsSeries = async (id: number) => {
    try {
      const { data } = await api.get(`/series/${id}`);

      setSeries(data.data.results[0]);
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
        <Appbar.Content title={series.title} />
      </Appbar.Header>

      <View style={styles.container}>
        {Object.keys(series).length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${series.thumbnail.path}.${series.thumbnail.extension}`,
                  }}
                />
              </View>

              <Card.Content style={styles.content}>
                <Title style={styles.title}>{series.title}</Title>

                {series.startYear && (
                  <>
                    <Paragraph style={[styles.titleContent, styles.date]}>
                      Datas da série
                    </Paragraph>
                    <Paragraph style={styles.date}>
                      Inicio: {series.startYear}
                    </Paragraph>
                    <Paragraph style={styles.date}>
                      Fim: {series.endYear}
                    </Paragraph>
                  </>
                )}

                {series.stories && series.stories.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>Histórias</Paragraph>
                    {series.stories.items.map(storie => (
                      <View style={styles.creators} key={storie.resourceURI}>
                        <Paragraph>{storie.name}</Paragraph>
                      </View>
                    ))}
                  </>
                )}

                {series.creators && series.creators.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>Criadores</Paragraph>
                    {series.creators.items.map(creator => (
                      <View key={creator.resourceURI} style={styles.creators}>
                        <Paragraph>Nome: {creator.name}</Paragraph>
                        <Paragraph>Função: {creator.role}</Paragraph>
                      </View>
                    ))}
                  </>
                )}

                {series.characters && series.characters.available > 0 && (
                  <>
                    <Paragraph style={styles.titleContent}>
                      Personagens
                    </Paragraph>
                    {series.characters.items.map((character, index) => (
                      <View key={index} style={styles.creators}>
                        <Paragraph>{character.name}</Paragraph>
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

export default DetailsSeries;
