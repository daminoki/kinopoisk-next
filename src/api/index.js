import { apiHelper } from './apiHelper';

export const getSearchResult = async(params) => apiHelper('get', 'v1.4/movie/search', { params: params });