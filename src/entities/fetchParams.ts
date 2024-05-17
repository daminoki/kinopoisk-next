export interface IFetchParams {
  page: number;
  limit: number;
  query?: string | null;
  type?: string;
  top250?: string;
  sortField?: string;
  sortType?: string;
  'premiere.world'?: string;
  status?: string;
  'votes.await'?: string;
}
