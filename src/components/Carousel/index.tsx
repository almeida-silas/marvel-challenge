import React from 'react';

import { Dimensions } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import ICharacter from '../../Interfaces/ICharacter';

import Card from './Card';

interface IProps {
  characters: ICharacter[];
}

const Carousel: React.FC<IProps> = ({ characters }: IProps) => {
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.58);

  const _renderItem = (items: { item: ICharacter; index: number }) => {
    const { item } = items;

    return <Card character={item} />;
  };

  return (
    <>
      <SnapCarousel
        data={characters}
        sliderWidth={700}
        itemWidth={ITEM_WIDTH}
        renderItem={_renderItem}
        layoutCardOffset={characters.length}
      />
    </>
  );
};

export default Carousel;
