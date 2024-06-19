import { apiHelper } from '@/api/apiHelper';
import type { IFetchMovieParams } from '@/entities/fetchParams';
import type {
  IFilm,
  ISearchResult,
  IUniversalSearchResult,
} from '@/entities/films';

export const getSearchResult = async (
  params: IFetchMovieParams,
): Promise<ISearchResult> => apiHelper('get', 'v1.4/movie/search', { params });

export const getMovieList = async (
  params: IFetchMovieParams,
): Promise<IUniversalSearchResult> =>
  apiHelper('get', 'v1.4/movie', { params });

export const getFilm = async (id: string): Promise<IFilm> =>
  apiHelper('get', `v1.4/movie/${id}`);
