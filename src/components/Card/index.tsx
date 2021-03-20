import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Button, Title, Card as CardPaper } from 'react-native-paper';
import ICharacter from '../../Interfaces/ICharacters';

import styles from './styles';

interface IProps {
  character: ICharacter;
}

const Card: React.FC<IProps> = ({ character }: IProps) => {
  const navigation = useNavigation();

  const goToDetails = (characterID: number) => {
    return navigation.navigate('Details', {
      characterID,
    });
  };

  return (
    <CardPaper style={styles.card}>
      <CardPaper.Cover
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
      />

      <CardPaper.Content style={styles.content}>
        <Title style={styles.title}>{character.name}</Title>
      </CardPaper.Content>

      <Button
        icon="plus-outline"
        mode="contained"
        style={styles.button}
        onPress={() => goToDetails(character.id)}>
        Mais detalhes
      </Button>
    </CardPaper>
  );
};

export default Card;
