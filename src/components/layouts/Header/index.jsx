'use client';

import Link from 'next/link';
import Logo from '../../../../public/images/header-logo.svg';
import styles from './Header.module.scss';
import { Search } from '@/components/layouts/Header/Search';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <Link href={'/'} className={styles.header__logo}>
          <Logo className={styles.header__logo} />
        </Link>

        <div className={styles.header__panel}>
          <Search />

          <button type="button" className={styles.header__login}>
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};