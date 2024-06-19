import Image from 'next/image';
import Link from 'next/link';

import styles from './List.module.scss';

interface IListProps {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  slug: string;
}

export default function List({ items }: { items: IListProps[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          <Link href={`/films/${item.slug}`} className={styles.link}>
            <div className={styles.img}>
              <Image src={item.imgSrc} alt={item.name} width={88} height={88} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
