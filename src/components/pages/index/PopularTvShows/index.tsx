import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import api from '@/api';
import MovieList from '@/components/common/MovieList';
import type { IFetchMovieParams } from '@/entities/fetchParams';

export default async function PopularTvShows() {
  const queryClient = new QueryClient();

  const searchParams: IFetchMovieParams = {
    page: 1,
    limit: 15,
    type: 'tv-series',
    top250: '!null',
    sortField: 'rating.kp',
    'votes.kp': '100000 - 1000000',
    sortType: '-1',
  };

  await queryClient.prefetchQuery({
    queryKey: ['popular-shows', searchParams],
    queryFn: () => api.movie.getMovieList(searchParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieList
        title="Популярные сериалы"
        searchParams={searchParams}
        sliderControlsName="popular-controls"
        queryKey="popular-shows"
      />
    </HydrationBoundary>
  );
}
