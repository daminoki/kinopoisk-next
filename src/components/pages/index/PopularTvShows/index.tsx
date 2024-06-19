import MovieList from '@/components/common/MovieList';
import type { IFetchMovieParams } from '@/entities/fetchParams';

export default function PopularTvShows() {
  const searchParams: IFetchMovieParams = {
    page: 1,
    limit: 15,
    type: 'tv-series',
    top250: '!null',
    sortField: 'rating.kp',
    'votes.kp': '100000 - 1000000',
    sortType: '-1',
  };

  return (
    <MovieList
      title="Популярные сериалы"
      searchParams={searchParams}
      sliderControlsName="popular-controls"
    />
  );
}
