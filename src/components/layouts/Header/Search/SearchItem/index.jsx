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
          {!imgSrc && <Image src={'/images/no-image.svg'} alt={title} width={32} height={48} />}
        </div>
        <div className={styles['search-item__info']}>
          <p className={styles['search-item__title']}>{title}</p>
          <div className={styles['search-item__bottom']}>
            <p className={styles['search-item__rating']}>{rating === 0 ? '-' : rating},</p>
            <p className={styles['search-item__release-year']}>{year}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};