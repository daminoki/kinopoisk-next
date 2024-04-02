import styles from './SearchItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const SearchItem = ({
  title,
  imgSrc,
  year,
  count,
  altName,
  genre,
  duration,
  description,
  top250,
  id
}) => {
  return (
    <li className={styles['search-item']}>
      <Link href={`/film/${id}`} className={styles['search-item__link']}>
        <p className={styles['search-item__count']}>{count}</p>
        <div className={styles['search-item__img']}>
          {imgSrc && <Image src={imgSrc} alt={title} width={90} height={135} />}
          {!imgSrc && <Image src={'/images/no-image.svg'} alt={title} width={90} height={135} />}
        </div>
        <div className={styles['search-item__info']}>
          <div className={styles['search-item__title-wrapper']}>
            <p className={styles['search-item__title']}>{title}</p>
            {top250 &&
                <span className={styles['search-item__top']}>топ-250</span>}
          </div>
          <div className={styles['search-item__alt-title']}>
            <p className={styles['search-item__alt-name']}>{altName ? altName : '-'}, <span
              className={styles['search-item__year']}>{year}</span></p>
          </div>
          {description && <p className={styles['search-item__desc']}>{description}</p>}
          <p className={styles['search-item__genre']}>
            {genre && <span className={styles['search-item__genre-title']}>{genre ? genre : ''}</span>}
            {genre && duration !== 0 && <span>, </span>}
            {duration !== 0 && <span className={styles['search-item__duration']}>{duration} мин.</span>}
          </p>
        </div>
      </Link>
    </li>
  );
};
