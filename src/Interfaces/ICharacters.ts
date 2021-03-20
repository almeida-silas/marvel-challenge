interface IItems {
  resourceURI: string;
  name: string;
}

interface Urls {
  type: string;
  url: string;
}

interface ICharacterInfo {
  available: number;
  collectionURI: string;
  items: IItems[];
  returned: number;
}

interface IThumbnail {
  path: string;
  extension: string;
}

export default interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  thumbnail: IThumbnail;
  comics: ICharacterInfo[];
  series: ICharacterInfo[];
  stories: ICharacterInfo[];
  events: ICharacterInfo[];
  urls: Urls[];
};
