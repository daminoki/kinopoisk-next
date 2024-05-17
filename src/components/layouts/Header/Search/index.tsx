import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

import api from '@/api';
import SearchItem from '@/components/layouts/Header/Search/SearchItem';
import Loader from '@/components/ui/Loader';
import type { ISingleSearchResult } from '@/entities/films';
import debounce from '@/utils/debounce';

import CloseIcon from '../../../../../public/icons/close.svg';
import SearchIcon from '../../../../../public/icons/search.svg';
import styles from './Search.module.scss';

export default function Search() {
  const [searchResult, setSearchResult] = useState<ISingleSearchResult[] | []>(
    [],
  );
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 5,
    query: '',
  });
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const ref = useRef<any>();
  const router = useRouter();

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    ref.current = handleInputChange;
  }, [handleInputChange]);

  const fetchSearchResult = async () => {
    const result = await api.movie.getSearchResult(searchParams);

    setSearchResult(result.docs);
  };

  const optimizesHandleInputChange = useMemo(() => {
    const callback = (value: string) => {
      ref.current(value);
      setSearchParams({
        ...searchParams,
        query: value,
      });
    };

    return debounce(callback, 500);
  }, [searchParams]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await fetchSearchResult();
      setIsLoading(false);
    }

    fetchData();
  }, [searchParams.query]);

  const handleSearch = (
    event: React.FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsDropdownOpened(false);

    console.log(searchValue);

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
          onInput={(e) => {
            handleInputChange(e.currentTarget.value);
            optimizesHandleInputChange(e.currentTarget.value);
          }}
          onFocus={() => setIsDropdownOpened(!isDropdownOpened)}
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

          {!isLoading && searchResult.length === 0 && (
            <p className={styles.search__empty}>
              По вашему запросу ничего не найдено
            </p>
          )}

          {!isLoading && searchResult.length > 0 && (
            <>
              <ul className={styles.search__list}>
                {searchResult.map((result) => (
                  <SearchItem
                    key={result.id}
                    show={result}
                    setIsDropdownOpened={setIsDropdownOpened}
                  />
                ))}
              </ul>

              {searchParams.query && (
                <button
                  type="button"
                  className={styles['search__view-all']}
                  onClick={(e) => handleSearch(e)}
                >
                  Показать все
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
