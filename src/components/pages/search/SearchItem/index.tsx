import Image from 'next/image';
import Link from 'next/link';

import type { ISingleSearchResult } from '@/entities/films';
import getImg from '@/utils/getImg';

import styles from './SearchItem.module.scss';

interface SearchItemProps {
  film: ISingleSearchResult;
  index: number;
}

export default function SearchItem({ film, index }: SearchItemProps) {
  return (
    <Link href={`/film/${film.id}`} className={styles['search-item__link']}>
      <p className={styles['search-item__count']}>{index + 1}</p>
      <div className={styles['search-item__img']}>
        <Image
          src={getImg(film.poster?.previewUrl)}
          alt={film.name}
          width={90}
          height={135}
        />
      </div>
      <div className={styles['search-item__info']}>
        <div className={styles['search-item__title-wrapper']}>
          <p className={styles['search-item__title']}>{film.name}</p>
          {film.top250 && (
            <span className={styles['search-item__top']}>топ-250</span>
          )}
        </div>
        <div className={styles['search-item__alt-title']}>
          <p className={styles['search-item__alt-name']}>
            {film.alternativeName && (
              <span className={styles['search-item__alt-title']}>
                {film.alternativeName}
              </span>
            )}

            {film.year !== 0 && film.alternativeName && <>, </>}

            {film.year !== 0 && (
              <span className={styles['search-item__year']}>{film.year}</span>
            )}
          </p>
        </div>
        {film.description && (
          <p className={styles['search-item__desc']}>{film.description}</p>
        )}
        <p className={styles['search-item__genre']}>
          {film.genres && film.genres[0]?.name && (
            <span className={styles['search-item__genre-title']}>
              {film.genres[0]?.name || ''}
            </span>
          )}
          {film.genres && film.genres[0]?.name && film.movieLength !== 0 && (
            <span>, </span>
          )}
          {film.movieLength !== 0 && (
            <span className={styles['search-item__duration']}>
              {film.movieLength} мин.
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
