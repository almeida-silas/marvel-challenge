import React from 'react';

import { Dimensions } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';

import IComics from '../../../../Interfaces/IComics';

import Card from '../Card';

interface IProps {
  comic: IComics[];
}

const Carousel: React.FC<IProps> = ({ comic }: IProps) => {
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const _renderItem = (items: { item: IComics; index: number }) => {
    const { item } = items;

    return <Card comic={item} />;
  };

  return (
    <SnapCarousel
      data={comic}
      sliderWidth={900}
      itemWidth={ITEM_WIDTH}
      renderItem={_renderItem}
      layoutCardOffset={comic.length}
    />
  );
};

export default Carousel;
