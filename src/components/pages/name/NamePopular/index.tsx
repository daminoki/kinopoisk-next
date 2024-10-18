'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import api from '@/api';
import Loader from '@/components/ui/Loader';
import type { IFilm } from '@/entities/films';
import getImg from '@/utils/getImg';

import styles from './NamePopular.module.scss';

interface INamePopularProps {
  movies: {
    id: number;
    name: string | null;
    alternativeName: string | null;
    rating: number | null;
    general: boolean | null;
    description: string | null;
    enProfession: string | null;
  }[];
}

export default function NamePopular({ movies }: INamePopularProps) {
  const [fetchedMovies, setFetchedMovies] = useState<IFilm[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    const moviePromises = movies.map((movie) =>
      api.movie.getFilm(movie.id.toString()),
    );

    setFetchedMovies(await Promise.all(moviePromises));
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [movies]);

  return (
    <div>
      {loading && <Loader />}

      {!loading && fetchedMovies.length === 0 && <p>Нет данных</p>}

      {!loading && fetchedMovies.length > 0 && (
        <div className={styles['name-popular']}>
          <p className={styles['name-popular__title']}>Популярные фильмы</p>

          <ul className={styles['name-popular__list']}>
            {fetchedMovies.map((movie) => (
              <li key={movie.id} className={styles['name-popular__item']}>
                <Link
                  href={`/film/${movie.id}`}
                  className={styles['name-popular__link']}
                >
                  <div className={styles['name-popular__img']}>
                    <Image
                      src={getImg(movie.poster?.previewUrl)}
                      alt={movie.name || 'Постер фильма'}
                      width={150}
                      height={225}
                    />
                    {movie.rating?.kp && (
                      <div className={styles['name-popular__rating']}>
                        {movie.rating.kp.toFixed(1)}
                      </div>
                    )}
                  </div>

                  <p className={styles['name-popular__name']}>{movie.name}</p>
                  <p className={styles['name-popular__info']}>
                    {movie.alternativeName && (
                      <span>{movie.alternativeName}</span>
                    )}

                    {movie.year && movie.alternativeName && ', '}

                    {movie.year && <span>{movie.year}</span>}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
