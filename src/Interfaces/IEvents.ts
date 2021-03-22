export default interface IEvents {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: [
    {
      type: string;
      url: string;
    },
  ];
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
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
    items: [
      {
        resourceURI: string;
        name: string;
      },
    ];
  };
  stories: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        type: string;
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
}
