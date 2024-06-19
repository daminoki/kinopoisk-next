'use client';

import { useQuery } from '@tanstack/react-query';

import api from '@/api';
import MovieCard from '@/components/common/MovieCard';
import Loader from '@/components/ui/Loader';
import Slider from '@/components/ui/Slider';
import type { IFetchMovieParams } from '@/entities/fetchParams';

import styles from './MovieList.module.scss';

interface MovieListProps {
  title: string;
  searchParams: IFetchMovieParams;
  sliderControlsName: string;
  queryKey: string;
}

export default function MovieList({
  title,
  searchParams,
  sliderControlsName,
  queryKey,
}: MovieListProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey, searchParams],
    queryFn: () => api.movie.getMovieList(searchParams),
  });

  const movies = data?.docs ?? [];

  if (isLoading)
    return (
      <div className={styles['movie-list']}>
        <h2 className={styles['movie-list__title']}>{title}</h2>
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className={styles['movie-list']}>
        <h2 className={styles['movie-list__title']}>{title}</h2>
        <p className={styles['movie-list__error']}>
          Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже
        </p>
      </div>
    );

  return (
    <div className={styles['movie-list']}>
      <h2 className={styles['movie-list__title']}>{title}</h2>
      {!movies.length && (
        <p className="movie-list__error">Упс! Ничего не найдено</p>
      )}
      {movies.length > 0 && (
        <div className={styles['movie-list__slider']}>
          <Slider
            spaceBetween={0}
            slidesPerView="auto"
            slides={movies}
            wrapperClassName={sliderControlsName}
            slideClassName={styles['movie-list__slide']}
            controlsClassName={styles['movie-list__controls']}
          >
            {movies.map((movie) => (
              <MovieCard show={movie} key={movie.id} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
