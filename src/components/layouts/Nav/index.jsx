'use client';

import styles from './Nav.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export const Nav = () => {
  const pathname = usePathname();

  const isActive = (href) => pathname === href ? `${styles.nav__link} ${styles.nav__link_active}` : `${styles.nav__link}`;

  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link href={'/'} className={isActive('/')}>Главная</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href={'/films'} className={isActive('/films')}>Фильмы</Link>
        </li>
      </ul>
    </div>
  );
};