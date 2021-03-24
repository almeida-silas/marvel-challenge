import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card as CardPaper } from 'react-native-paper';
import ICharacter from '../../../../Interfaces/ICharacter';
import styles from './styles';

interface IProps {
  character: ICharacter;
}

const Card: React.FC<IProps> = ({ character }: IProps) => {
  const navigation = useNavigation();

  const goToDetails = (characterID: number) => {
    return navigation.navigate('DetailsCharacter', {
      characterID,
    });
  };

  return (
    <CardPaper style={styles.card}>
      <CardPaper.Cover
        fadeDuration={100}
        source={{
          uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        }}
      />

      <CardPaper.Content style={styles.content}>
        <CardPaper.Title
          titleStyle={styles.title}
          titleNumberOfLines={3}
          subtitleStyle={styles.subtitle}
          subtitleNumberOfLines={4}
          title={character.name}
          subtitle={character.description}
        />
      </CardPaper.Content>

      {character.comics.available === 0 &&
      character.events.available === 0 &&
      character.stories.available === 0 &&
      character.series.available === 0 ? (
        <View />
      ) : (
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => goToDetails(character.id)}>
          Veja Mais
        </Button>
      )}
    </CardPaper>
  );
};

export default Card;
