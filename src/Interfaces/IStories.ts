import IThumbnail from './IThumbnail';

export default interface IStories {
  id: number;
  title: number;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: IThumbnail;
  creators: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        role: string;
      },
    ];
  };
  characters: {
    available: number;
    collectionURI: string;
    items: Object[];
  };
  series: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      },
    ];
  };
  comics: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      },
    ];
  };
  events: {
    available: number;
    collectionURI: string;
    items: Object[];
    returned: 0;
  };
  originalIssue: {
    resourceURI: string;
    name: string;
  };
}
