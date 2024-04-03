'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import styles from './Nav.module.scss';

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href) => (pathname === href ? `${styles.nav__link} ${styles.nav__link_active}` : `${styles.nav__link}`);

  return (
    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link href="/" className={isActive('/')}>
            <HomeIcon sx={{
              color: '#141414',
              transition: 'color .3s ease-in-out',
            }}
            />
            Главная
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/films" className={isActive('/films')}>
            <VideocamIcon sx={{
              color: '#141414',
              transition: 'color .3s ease-in-out',
            }}
            />
            Фильмы
          </Link>
        </li>
      </ul>
    </div>
  );
}
