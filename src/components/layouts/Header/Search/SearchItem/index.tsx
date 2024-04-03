'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './SearchItem.module.scss';

export default function SearchItem({
  title, imgSrc, year, rating, id, setIsDropdownOpened,
}) {
  return (
    <li className={styles['search-item']}>
      <Link href={`/film/${id}`} className={styles['search-item__link']} onClick={() => setIsDropdownOpened(false)}>
        <div className={styles['search-item__img']}>
          {imgSrc && <Image src={imgSrc} alt={title} width={32} height={48} />}
          {!imgSrc && <Image src="/images/no-image.svg" alt={title} width={32} height={48} />}
        </div>
        <div className={styles['search-item__info']}>
          <p className={styles['search-item__title']}>{title}</p>
          <div className={styles['search-item__bottom']}>
            <p className={styles['search-item__rating']}>
              {rating === 0 ? '-' : rating}
              ,
            </p>
            <p className={styles['search-item__release-year']}>{year}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
