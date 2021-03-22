import IThumbnail from './IThumbnail';

export interface ICharacterInfo {
  available: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
    },
  ];
}

export default interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  thumbnail: IThumbnail;
  comics: ICharacterInfo;
  series: ICharacterInfo;
  stories: ICharacterInfo;
  events: ICharacterInfo;
  urls: [
    {
      type: string;
      url: string;
    },
  ];
}
