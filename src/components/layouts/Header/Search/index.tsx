'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import api from '@/api';
import SearchItem from '@/components/layouts/Header/Search/SearchItem';
import Loader from '@/components/ui/Loader';
import CloseIcon from '@/public/icons/close.svg';
import SearchIcon from '@/public/icons/search.svg';

import styles from './Search.module.scss';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  const {
    data: searchData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['short-search', debouncedSearchValue],
    queryFn: () =>
      api.movie.getSearchResult({
        page: 1,
        limit: 5,
        query: debouncedSearchValue,
      }),
    select: (data) => data.docs,
    enabled: !!debouncedSearchValue,
  });

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    setIsDropdownOpened(true);
  };

  const handleSearch = (
    event: React.FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsDropdownOpened(false);

    if (searchValue) {
      router.push(`/search?query=${searchValue}`);
    }
  };

  const handleSearchButtonClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target as HTMLElement).closest(`.${styles.search}`)
      ) {
        setIsDropdownOpened(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleCloseClick = () => {
    setIsSearchActive(false);
    setIsDropdownOpened(false);
  };

  return (
    <div className={styles.search}>
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          value={searchValue}
          className={
            isSearchActive
              ? `${styles.search__input} ${styles.search__input_active}`
              : `${styles.search__input}`
          }
          type="search"
          placeholder="Найти"
          onInput={(e) => handleInputChange(e.currentTarget.value)}
          onFocus={() => setIsDropdownOpened(true)}
        />
      </form>

      <button
        type="button"
        className={styles.search__submit}
        onClick={(e) => handleSearch(e)}
        aria-label="Поиск"
      >
        <SearchIcon />
      </button>

      <button
        type="button"
        className={styles['search__submit-mob']}
        onClick={handleSearchButtonClick}
        aria-label="Мобильный поиск"
      >
        <SearchIcon />
      </button>

      <button
        type="button"
        className={
          isSearchActive
            ? `${styles.search__close} ${styles.search__close_active}`
            : `${styles.search__close}`
        }
        onClick={handleCloseClick}
        aria-label="Закрыть поиск"
      >
        <CloseIcon />
      </button>

      {isDropdownOpened && (
        <div className={styles.search__result}>
          {isLoading && <Loader />}

          {error && (
            <p className={styles.search__empty}>
              Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже
            </p>
          )}

          {searchData && !searchData.length && (
            <p className={styles.search__empty}>
              По вашему запросу ничего не найдено
            </p>
          )}

          <ul className={styles.search__list}>
            {searchData?.map((result) => (
              <SearchItem
                key={result.id}
                show={result}
                setIsDropdownOpened={setIsDropdownOpened}
              />
            ))}
          </ul>

          {debouncedSearchValue && (
            <button
              type="button"
              className={styles['search__view-all']}
              onClick={(e) => handleSearch(e)}
            >
              Показать все
            </button>
          )}
        </div>
      )}
    </div>
  );
}
