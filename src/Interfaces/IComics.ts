import IThumbnail from './IThumbnail';

export default interface IComics {
  id: number;
  digitalId: number;
  title: string;
  variantDescription: string;
  description: string;
  modified: Date;
  resourceURI: string;
  textObjects: [
    {
      type: string;
      language: string;
      text: string;
    },
  ];
  urls: [
    {
      type: string;
      url: string;
    },
  ];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: [
    {
      resourceURI: string;
      name: string;
    },
  ];
  dates: [
    {
      type: string;
      date: string;
    },
  ];
  thumbnail: IThumbnail;
  images: IThumbnail[];
  prices: [
    {
      type: string;
      price: number;
    },
  ];

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
    items: {
      resourceURI: string;
      name: string;
      type: string;
    };
  };
  events: {
    available: number;
    collectionURI: string;
    items: [{}];
  };
}
