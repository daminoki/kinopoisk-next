import Image from 'next/image';
import Link from 'next/link';

import type { ISingleSearchResult } from '@/entities/films';
import getImg from '@/utils/getImg';

import styles from './SearchItem.module.scss';

interface SearchItemProps {
  show: ISingleSearchResult;
  setIsDropdownOpened: (value: boolean) => void;
}

export default function SearchItem({
  show,
  setIsDropdownOpened,
}: SearchItemProps) {
  return (
    <li className={styles['search-item']}>
      <Link
        href={`/film/${show.id}`}
        className={styles['search-item__link']}
        onClick={() => setIsDropdownOpened(false)}
      >
        <div className={styles['search-item__img']}>
          <Image
            src={getImg(show.poster?.previewUrl)}
            alt={show.name}
            width={32}
            height={48}
          />
        </div>
        <div className={styles['search-item__info']}>
          <p className={styles['search-item__title']}>{show.name}</p>
          <div className={styles['search-item__bottom']}>
            <p className={styles['search-item__rating']}>
              {show.rating && show.rating.kp && show.rating.kp === 0
                ? '-'
                : show.rating && show.rating.kp && show.rating.kp.toFixed(1)}
              ,
            </p>
            <p className={styles['search-item__release-year']}>{show.year}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
