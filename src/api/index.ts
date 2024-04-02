import { apiHelper } from './apiHelper';
import { IFetchParams } from '@/entities/fetchParams';
import { IFilm } from '@/entities/films';

export const getSearchResult = async(params: IFetchParams) => apiHelper('get', 'v1.4/movie/search', { params: params });

export const getPopularTvShows = async(params: IFetchParams) => apiHelper('get', 'v1.3/movie', { params: params });

export const getFilm = async(id: string): Promise<IFilm> => apiHelper('get', `v1.4/movie/${id}`);
