'use client';

import styles from './SearchItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const SearchItem = ({title, imgSrc, year, rating}) => {
  return (
    <li className={styles['search-item']}>
      <Link href={'/'} className={styles['search-item__link']}>
        <div className={styles['search-item__img']}>
          {imgSrc && <Image src={imgSrc} alt={title} width={32} height={48} />}
        </div>
        <div className={styles['search-item__info']}>
          <>
            <p className={styles['search-item__title']}>{title}</p>
            <p className={styles['search-item__release-year']}>{year}</p>
          </>
          <p className={styles['search-item__rating']}>{rating}</p>
        </div>
      </Link>
    </li>
  );
};