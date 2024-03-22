import styles from './PopularTvShow.module.scss';

import Image from 'next/image';

export const PopularTvShow = ({ show }) => {
  console.log(show);

  return (
    <div className={styles['popular-show']}>
      <Image src={show.poster.url} alt={show.name} width={150} height={225} />
    </div>
  );
};