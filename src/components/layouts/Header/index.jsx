'use client';

import Link from 'next/link';
import Logo from '../../../../public/images/header-logo.svg';
import SearchIcon from '../../../../public/icons/search.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <Link href={'/'} className={styles.header__logo}>
          <Logo className={styles.header__logo} />
        </Link>

        <div className={styles.header__panel}>
          <div className={styles.header__search}>
            <input className={styles.header__input} type={'search'} placeholder={'Фильмы, сериалы, персоны'} />
            <button type={'button'} className={styles['header__search-submit']}>
              <SearchIcon />
            </button>
          </div>

          <button type="button" className={styles.header__login}>
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};