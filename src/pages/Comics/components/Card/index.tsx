import React from 'react';

import { View } from 'react-native';
import { Card as CardPaper, Paragraph } from 'react-native-paper';

import IComic from '../../../../Interfaces/IComics';

import styles from './styles';

interface IProps {
  comic: IComic;
}

const Card: React.FC<IProps> = ({ comic }: IProps) => {
  return (
    <CardPaper style={styles.card}>
      <CardPaper.Cover
        source={{ uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}` }}
      />

      <CardPaper.Content style={styles.content}>
        <CardPaper.Title
          title={comic.title}
          subtitle={comic.description}
          titleStyle={styles.title}
          titleNumberOfLines={3}
          subtitleStyle={styles.subtitle}
          subtitleNumberOfLines={3}
        />

        <View style={styles.contentFooter}>
          <Paragraph>{comic.variantDescription}</Paragraph>
          <Paragraph>{comic.description}</Paragraph>
        </View>
      </CardPaper.Content>
    </CardPaper>
  );
};

export default Card;
