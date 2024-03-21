import styles from './SearchItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const SearchItem = ({ mesureRef, title, imgSrc, year, rating, count, altName }) => {
  return (
    <li className={styles['search-item']} ref={mesureRef}>
      <Link href={'/'} className={styles['search-item__link']}>
        <p className={styles['search-item__count']}>{count}</p>
        <div className={styles['search-item__img']}>
          {imgSrc && <Image src={imgSrc} alt={title} width={90} height={135} />}
          {!imgSrc && <Image src={'/images/no-image.svg'} alt={title} width={90} height={135} />}
        </div>
        <div className={styles['search-item__info']}>
          <p className={styles['search-item__title']}>{title}</p>
          <div className={styles['search-item__alt-title']}>
            <p className={styles['search-item__alt-name']}>{altName ? altName : '-'}, <span
              className={styles['search-item__year']}>{year}</span></p>
          </div>
        </div>
      </Link>
    </li>
  );
};
