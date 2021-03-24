import IThumbnail from './IThumbnail';

export interface IItems {
  resourceURI: string;
  name: string;
  type: string;
}

export interface ICharacterInfo {
  available: number;
  collectionURI: string;
  items: IItems[];
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
