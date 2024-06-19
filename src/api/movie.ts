import apiHelper from '@/api/apiHelper';
import type { IFetchParams } from '@/entities/fetchParams';
import type {
  IFilm,
  ISearchResult,
  IUniversalSearchResult,
} from '@/entities/films';

export const getSearchResult = async (
  params: IFetchParams,
): Promise<ISearchResult> => apiHelper('get', 'v1.4/movie/search', { params });

export const getPopularTvShows = async (
  params: IFetchParams,
): Promise<IUniversalSearchResult> =>
  apiHelper('get', 'v1.4/movie', { params });

export const getFilm = async (id: string): Promise<IFilm> =>
  apiHelper('get', `v1.4/movie/${id}`);

export const getNewReleases = async (
  params: IFetchParams,
): Promise<IUniversalSearchResult> =>
  apiHelper('get', 'v1.4/movie', { params });

export const getFilmsList = async (
  params: IFetchParams,
): Promise<IUniversalSearchResult> =>
  apiHelper('get', 'v1.4/movie', { params });
