import Link from 'next/link';
import Image from 'next/image';
import getImg from '@/utils/getImg';
import styles from './SearchItem.module.scss';

interface SearchItemProps {
  show: {
    id: number;
    name: string;
    poster: {
      previewUrl: string;
    };
    rating: {
      kp: number;
    };
    year: number;
  };
  setIsDropdownOpened: (value: boolean) => void;
}

export default function SearchItem({ show, setIsDropdownOpened }: SearchItemProps) {
  return (
    <li className={styles['search-item']}>
      <Link href={`/film/${show.id}`} className={styles['search-item__link']} onClick={() => setIsDropdownOpened(false)}>
        <div className={styles['search-item__img']}>
          <Image src={getImg(show.poster.previewUrl)} alt={show.name} width={32} height={48} />
        </div>
        <div className={styles['search-item__info']}>
          <p className={styles['search-item__title']}>{show.name}</p>
          <div className={styles['search-item__bottom']}>
            <p className={styles['search-item__rating']}>
              {show.rating.kp === 0 ? '-' : show.rating.kp}
              ,
            </p>
            <p className={styles['search-item__release-year']}>{show.year}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
