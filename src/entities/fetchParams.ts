export interface IFetchParams {
  page: string | number;
  limit: string | number;
  query?: string;
  type?: string;
  top250?: string;
  sortField?: string;
  sortType?: string;
}
