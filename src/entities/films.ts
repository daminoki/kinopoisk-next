interface IFilmRating {
  kp: number | null;
  imdb: number | null;
  filmCritics: number | null;
  russianFilmCritics: number | null;
  await: number | null;
  tmdb: number | null;
}

interface IFilmImage {
  url: string | null;
  previewUrl: string | null;
}

interface IFilmCurrency {
  value: number | null;
  currency: string | null;
}

interface IFilmPremiereDate {
  country: string | null;
  world: Date | null;
  russia: Date | null;
  digital: string | null;
  cinema: Date | null;
  bluray: string;
  dvd: string;
}

interface IFilmReviewInfo {
  count: number | null;
  positiveCount: number | null;
  percentage: string | null;
}

interface IFilmSeasonInfo {
  number: number | null;
  episodesCount: number | null;
}

interface IFilmWatchability {
  items: [
    {
      name: string | null;
      logo: {
        url: string | null;
      };
      url: string;
    },
  ];
}

interface IFilmAward {
  name: string;
  year: number;
  nominations: number;
  wins: number;
}

interface IFilmNetwork {
  items: [
    {
      name: string;
      logo: {
        url: string | null;
      };
    },
  ];
}

interface IFilmPerson {
  id: number | null;
  photo: string | null;
  name: string | null;
  enName: string | null;
  description: string;
  profession: string;
  enProfession: string;
}

interface IFilmFact {
  value: string;
  type: string;
  spoiler: boolean;
}

interface IFilmImageInfo {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

interface IFilmReleaseYears {
  start: number | null;
  end: number | null;
}

interface IFilmVideo {
  url: string | null;
  name: string | null;
  site: string | null;
  type: string | null;
  size: number;
}

interface IFilmExternalId {
  imdb: string | null;
  tmdb: number | null;
  kpHD: string | null;
}

interface IFilmName {
  name: string;
  language: string | null;
  type: string | null;
}

interface IFilmVotes {
  kp: string | null;
  imdb: number | null;
  filmCritics: number | null;
  russianFilmCritics: number | null;
  await: number | null;
  tmdb: number | null;
}

interface IFilmSimilarMovie {
  id: number | null;
  rating: IFilmRating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: IFilmImage;
}

interface IFilmSequalAndPrequel {
  id: number | null;
  rating: IFilmRating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: IFilmImage;

}
export interface IFilm {
  id: number;
  externalId: IFilmExternalId;
  name: string | null;
  rating?: IFilmRating;
  alternativeName?: string | null;
  enName?: string | null;
  names: IFilmName[];
  type: string;
  typeNumber: 1 | 2 | 3 | 4 | 5 | 6;
  year?: number | null;
  description?: string | null;
  shortDescription?: string | null;
  slogan?: string | null;
  status?: string | null;
  votes?: IFilmVotes;
  movieLength?: number | null;
  ratingMpaa?: string | null;
  ageRating?: number | null;
  logo?: {
    url: string | null;
  };
  poster?: IFilmImage;
  backdrop?: IFilmImage;
  videos?: {
    trailers?: IFilmVideo[];
    teasers: IFilmVideo[];
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
  persons?: IFilmPerson[];
  reviewInfo?: IFilmReviewInfo;
  seasonsInfo?: IFilmSeasonInfo[];
  budget?: IFilmCurrency;
  fees?: {
    [key: string]: IFilmCurrency;
  };
  premiere?: IFilmPremiereDate;
  similarMovies?: IFilmSimilarMovie[];
  sequelsAndPrequels?: IFilmSequalAndPrequel[];
  watchability?: IFilmWatchability;
  releaseYears?: IFilmReleaseYears[];
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
  awards?: IFilmAward[];
  networks: IFilmNetwork[];
  updatedAt: Date;
  createdAt: Date;
  facts: IFilmFact[];
  imagesInfo: IFilmImageInfo;
}

export interface ISearchResult {
  docs: [
    {
      id: number;
      name: string;
      alternativeName: string;
      enName: string;
      type: string;
      year: number;
      description: string;
      shortDescription: string;
      movieLength: number;
      names: IFilmName[];
      externalId: IFilmExternalId | null;
      logo?: {
        url: string | null;
      };
      poster?: IFilmImage;
      backdrop?: IFilmImage;
      rating?: IFilmRating;
      votes?: IFilmVotes;
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
      releaseYears?: IFilmReleaseYears[];
      isSeries: boolean;
      ticketsOnSale: boolean;
      totalSeriesLength: number;
      seriesLength: number;
      ratingMpaa: string;
      ageRating: number;
      top10: number | null;
      top250: number | null;
      typeNumber: 1 | 2 | 3 | 4 | 5 | 6;
      status: string;
      internalNames: string[];
      internalRating: number;
      internalVotes: number;
    },
  ];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IUniversalSearchResult {
  docs: [
    {
      id: number;
      externalId: IFilmExternalId;
      name: string | null;
      alternativeName: string | null;
      enName: string | null;
      names: IFilmName[];
      type: 'movie' | 'tv-series' | 'cartoon' | 'anime' | 'animated-series' | 'tv-show';
      typeNumber: 1 | 2 | 3 | 4 | 5 | 6;
      year: number | null;
      description: string | null;
      shortDescription: string | null;
      slogan: string | null;
      status: string | null;
      rating?: IFilmRating;
      votes?: IFilmVotes;
      movieLength: number | null;
      ratingMpaa: string | null;
      ageRating: number | null;
      logo?: {
        url: string | null;
      };
      poster?: IFilmImage;
      backdrop?: IFilmImage;
      videos?: {
        trailers?: IFilmVideo[];
        teasers: IFilmVideo[]
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
      persons?: IFilmPerson[];
      reviewInfo?: IFilmReviewInfo
      seasonsInfo?: IFilmSeasonInfo[];
      budget?: IFilmCurrency;
      fees?: {
        [key: string]: IFilmCurrency;
      };
      premiere?: IFilmPremiereDate;
      similarMovies?: IFilmSimilarMovie[];
      sequelsAndPrequels?: IFilmSequalAndPrequel[];
      watchability?: IFilmWatchability;
      releaseYears?: IFilmReleaseYears[];
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
      networks: IFilmNetwork[];
      updatedAt: Date;
      createdAt: Date;
      facts: IFilmFact[];
      imagesInfo: IFilmImageInfo;
    },
  ];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
