import MovieList from '@/components/common/MovieList';
import type { IFetchMovieParams } from '@/entities/fetchParams';

export default function NewReleases() {
  const searchParams: IFetchMovieParams = {
    page: 1,
    limit: 15,
    year: '2024',
    sortField: 'rating.kp',
    sortType: '-1',
    'votes.kp': '50000 - 1000000',
  };

  return (
    <MovieList
      title="Свежие релизы"
      searchParams={searchParams}
      sliderControlsName="new-releases-controls"
    />
  );
}
