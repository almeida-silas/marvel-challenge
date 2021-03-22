export default interface ISeries {
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
  startYear: number;
  endYear: number;
  modified: Date;
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
  events: {
    available: number;
    collectionURI: string;
    items: [];
  };
}
