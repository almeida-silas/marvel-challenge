import { NavigationProp, ParamListBase } from '@react-navigation/core';

import { extractIDfromURI } from '../../../utils/extractIDfromURI';

export const goToComicID = (
  uri: string,
  navigation: NavigationProp<ParamListBase>,
) => {
  const id = extractIDfromURI(uri);
  if (id !== false) {
    return navigation.navigate('DetailsComics', { comicID: id });
  }
};
