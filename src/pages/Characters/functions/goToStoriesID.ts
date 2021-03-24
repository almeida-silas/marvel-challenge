import { NavigationProp, ParamListBase } from '@react-navigation/core';

import { extractIDfromURI } from '../../../utils/extractIDfromURI';

export const goToStoriesID = (
  uri: string,
  navigation: NavigationProp<ParamListBase>,
) => {
  const id = extractIDfromURI(uri);
  if (id !== false) {
    return navigation.navigate('DetailsStories', { storiesID: id });
  }
};
