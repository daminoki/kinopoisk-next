import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import api from '@/api';
import MovieList from '@/components/common/MovieList';
import type { IFetchMovieParams } from '@/entities/fetchParams';

export default async function NewReleases() {
  const queryClient = new QueryClient();

  const searchParams: IFetchMovieParams = {
    page: 1,
    limit: 15,
    year: '2024',
    sortField: 'rating.kp',
    sortType: '-1',
    'votes.kp': '50000 - 1000000',
  };

  await queryClient.prefetchQuery({
    queryKey: ['new-releases', searchParams],
    queryFn: () => api.movie.getMovieList(searchParams),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieList
        title="Свежие релизы"
        searchParams={searchParams}
        sliderControlsName="new-releases-controls"
        queryKey="new-releases"
      />
    </HydrationBoundary>
  );
}
