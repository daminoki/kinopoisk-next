import { IFetchParams } from '@/entities/fetchParams';
import { IFilm } from '@/entities/films';
import apiHelper from './apiHelper';

export const getSearchResult = async (params: IFetchParams) => apiHelper('get', 'v1.4/movie/search', { params });

export const getPopularTvShows = async (params: IFetchParams) => apiHelper('get', 'v1.3/movie', { params });

export const getFilm = async (id: string): Promise<IFilm> => apiHelper('get', `v1.4/movie/${id}`);
