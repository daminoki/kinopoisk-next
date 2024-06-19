import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import type { IFilm } from '@/entities/films';
import getImg from '@/utils/getImg';

import styles from './MovieCard.module.scss';

export default function MovieCard({ show }: { show: IFilm }) {
  const [startYear] = useState(
    show.releaseYears?.length ? show.releaseYears[0]?.start : show.year,
  );
  const [endYear] = useState(
    show.releaseYears?.length ? show.releaseYears[0]?.end : show.year,
  );

  const getReleaseYears = useMemo(() => {
    if (startYear === endYear) {
      return startYear;
    }

    if (!endYear) {
      return startYear;
    }

    return `${startYear} - ${endYear}`;
  }, [startYear, endYear]);

  return (
    <Link href={`/film/${show.id}`} className={styles['movie-card']}>
      <div className={styles['movie-card__img']}>
        <Image
          src={getImg(show.poster?.url)}
          alt={show.name || 'Изображение'}
          width={150}
          height={225}
          priority
        />
      </div>
      <div className={styles['movie-card__info']}>
        <p className={styles['movie-card__title']}>{show.name}</p>
        <p className={styles['movie-card__row']}>
          {getReleaseYears}
          {', '}
          {show.genres && show.genres[0].name}
        </p>
      </div>
    </Link>
  );
}
