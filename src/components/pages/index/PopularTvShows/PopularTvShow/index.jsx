import styles from './PopularTvShow.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';

export const PopularTvShow = ({ show }) => {
  const [startYear] = useState(show.releaseYears[0].start);
  const [endYear] = useState(show.releaseYears[0].end);

  const getReleaseYears = useMemo(() => {
    if (startYear === endYear) {
      return startYear;
    }

    return `${startYear} - ${endYear}`;
  }, [startYear, endYear]);

  return (
    <Link href={'/'} className={styles['popular-show']}>
      <div className={styles['popular-show__img']}>
        <Image src={show.poster.url} alt={show.name} width={150} height={225} />
      </div>
      <div className={styles['popular-show__info']}>
        <p className={styles['popular-show__title']}>{show.name}</p>
        <p className={styles['popular-show__row']}>{getReleaseYears}, {show.genres[0].name}</p>
      </div>
    </Link>
  );
};