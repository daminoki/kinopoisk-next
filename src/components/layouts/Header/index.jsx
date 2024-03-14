'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../../../public/images/header-logo.svg';
import SearchIcon from '../../../../public/icons/search.svg';
import styles from './Header.module.scss';
import { getSearchResult } from '@/api';
import { debounce } from '@/utils/debounce';

export const Header = () => {

  const handleInputChange = async (e) => {
    const result = await getSearchResult({
      page: 1,
      limit: 10,
      query: e.target.value
    });
  };

  const optimizesHandleInputChange = debounce((e) => handleInputChange(e), 500);

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <Link href={'/'} className={styles.header__logo}>
          <Logo className={styles.header__logo} />
        </Link>

        <div className={styles.header__panel}>
          <div className={styles.header__search}>
            <input className={styles.header__input} type={'search'} placeholder={'Найти'} onInput={(e) => optimizesHandleInputChange(e)} />
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