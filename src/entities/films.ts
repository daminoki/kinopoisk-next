export interface IFilm {
  id: number;
  externalId: {
    imdb: string | null;
    tmdb: number | null;
    kpHD: string | null;
  };
  name: string | null;
  rating?: {
    kp: number | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
    tmdb: number | null;
  };
  alternativeName?: string | null;
  enName?: string | null;
  names: [
    {
      name: string;
      language: string | null;
      type: string | null;
    },
  ];
  type: string;
  typeNumber: 1 | 2 | 3 | 4 | 5 | 6;
  year?: number | null;
  description?: string | null;
  shortDescription?: string | null;
  slogan?: string | null;
  status?: string | null;
  votes?: {
    kp: string | null;
    imdb: number | null;
    filmCritics: number | null;
    russianFilmCritics: number | null;
    await: number | null;
    tmdb: number | null;
  };
  movieLength?: number | null;
  ratingMpaa?: string | null;
  ageRating?: number | null;
  logo?: {
    url: string | null;
  };
  poster?: {
    url: string | null;
    previewUrl: string | null;
  };
  backdrop?: {
    url: string | null;
    previewUrl: string | null;
  };
  videos?: {
    trailers?: [
      {
        url: string | null;
        name: string | null;
        site: string | null;
        type: string | null;
        size: number;
      },
    ];
    teasers: [
      {
        url: string | null;
        name: string | null;
        site: string | null;
        type: string | null;
        size: number;
      },
    ];
  };
  genres?: [
    {
      name: string;
    },
  ];
  countries?: [
    {
      name: string;
    },
  ];
  persons?: [
    {
      id: number | null;
      photo: string | null;
      name: string | null;
      enName: string | null;
      description: string;
      profession: string;
      enProfession: string;
    },
  ];
  reviewInfo?: {
    count: number | null;
    positiveCount: number | null;
    percentage: string | null;
  };
  seasonsInfo?: [
    {
      number: number | null;
      episodesCount: number | null;
    },
  ];
  budget?: {
    value: number | null;
    currency: string | null;
  };
  fees?: {
    [key: string]: {
      value: number | null;
      currency: string | null;
    }
  };
  premiere: {
    country: string | null;
    world: Date | null;
    russia: Date | null;
    digital: string | null;
    cinema: Date | null;
    bluray: string;
    dvd: string;
  };
  similarMovies?: [
    {
      id: number | null;
      rating: {
        kp: number | null;
        imdb: number | null;
        filmCritics: number | null;
        russianFilmCritics: number | null;
        await: number | null;
        tmdb: number | null;
      };
      year: number;
      name: string;
      enName: string;
      alternativeName: string;
      type: string;
      poster: {
        url: string | null;
        previewUrl: string | null;
      };
    },
  ];
  sequelsAndPrequels?: [
    {
      id: number | null;
      rating: {
        kp: number | null;
        imdb: number | null;
        filmCritics: number | null;
        russianFilmCritics: number | null;
        await: number | null;
        tmdb: number | null;
      };
      year: number;
      name: string;
      enName: string;
      alternativeName: string;
      type: string;
      poster: {
        url: string | null;
        previewUrl: string | null;
      };
    },
  ];
  watchability?: {
    items: [
      {
        name: string | null;
        logo: {
          url: string | null;
        };
        url: string;
      },
    ];
  };
  releaseYears?: [
    {
      start: number | null;
      end: number | null;
    },
  ];
  top10?: number | null;
  top250?: number | null;
  ticketsOnSale?: boolean | null;
  totalSeriesLength?: number | null;
  seriesLength?: number | null;
  isSeries: boolean;
  audience?: [
    {
      count: number;
      country: string;
    },
  ];
  lists?: string[] | null;

  awards?: [
    {
      name: string;
      year: number;
      nominations: number;
      wins: number;
    },
  ];
  networks: [
    {
      items: [
        {
          name: string;
          logo: {
            url: string | null;
          };
        },
      ];
    },
  ];
  updatedAt: Date;
  createdAt: Date;
  facts: [
    {
      value: string;
      type: string;
      spoiler: boolean;
    },
  ];
  imagesInfo: {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
  };
}
