import React from 'react';

import { Card, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

import { IItems } from '../../Interfaces/ICharacter';
import styles from './styles';

interface IProps {
  item: IItems;
  onPress: () => void;
}

const CardInformations: React.FC<IProps> = ({ item, onPress }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card key={item.resourceURI} style={styles.container}>
        <Title style={styles.title}>{item.name}</Title>
      </Card>
    </TouchableOpacity>
  );
};

export default CardInformations;
