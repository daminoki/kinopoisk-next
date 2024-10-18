import Image from 'next/image';

import getImg from '@/utils/getImg';

import styles from './NameImg.module.scss';

interface INameImgProps {
  imgSrc: string | null | undefined;
  name: string | null | undefined;
}

export default function NameImg({ imgSrc, name }: INameImgProps) {
  return (
    <div className={styles.img}>
      <Image
        src={getImg(imgSrc)}
        width={300}
        height={450}
        alt={name || 'Фото персоны'}
      />
    </div>
  );
}
