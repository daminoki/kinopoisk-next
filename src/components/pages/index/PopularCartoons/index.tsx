import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import api from '@/api';
import MovieList from '@/components/common/MovieList';
import type { IFetchMovieParams } from '@/entities/fetchParams';

export default async function PopularCartoons() {
  const queryClient = new QueryClient();

  const searchParams: IFetchMovieParams = {
    page: 1,
    limit: 15,
    type: 'cartoon',
    top250: '!null',
    sortField: 'rating.kp',
    'votes.kp': '100000 - 1000000',
    sortType: '-1',
  };

  await queryClient.prefetchQuery({
    queryKey: ['popular-cartoons', searchParams],
    queryFn: () => api.movie.getMovieList(searchParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieList
        title="Для детей"
        searchParams={searchParams}
        sliderControlsName="popular-cartoons"
        queryKey="popular-cartoons"
      />
    </HydrationBoundary>
  );
}
