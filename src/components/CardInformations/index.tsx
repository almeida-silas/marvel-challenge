import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Card, Title } from 'react-native-paper';

import { IItems } from '../../Interfaces/ICharacter';
import styles from './styles';

interface IProps {
  item: IItems;
}

const CardInformations: React.FC<IProps> = ({ item }: IProps) => {
  return (
    <TouchableOpacity>
      <Card key={item.resourceURI} style={styles.container}>
        <Title style={styles.title}>{item.name}</Title>
      </Card>
    </TouchableOpacity>
  );
};

export default CardInformations;
