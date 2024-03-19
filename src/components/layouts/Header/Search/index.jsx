import styles from './Search.module.scss';
import SearchIcon from '../../../../../public/icons/search.svg';
import { debounce } from '@/utils/debounce';
import { useState, useEffect, useMemo, useRef } from 'react';
import { SearchItem } from '@/components/layouts/Header/Search/SearchItem';
import { getSearchResult } from '@/api';
import { useRouter } from 'next/navigation';
import Loader from '@/components/ui/Loader';

export const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 5,
    query: ''
  });
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();
  const router = useRouter();

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    ref.current = handleInputChange;
  }, [handleInputChange]);

  const fetchSearchResult = async () => {
    const result = await getSearchResult(searchParams);

    setSearchResult(result.docs);
  };

  const optimizesHandleInputChange = useMemo(() => {
    const callback = (value) => {
      ref.current(value);
      setSearchParams({
        ...searchParams,
        query: value
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

  const handleSearch = (event) => {
    event.preventDefault();
    setIsDropdownOpened(false);

    console.log(searchValue);

    if (searchValue) {
      router.push(`/search?query=${searchValue}`);
    }
  };


  return (
    <div className={styles.search}>
      <form onSubmit={(e) => handleSearch(e)}>
        <input value={searchValue} className={styles.search__input} type={'search'} placeholder={'Найти'}
          onInput={(e) => {
            handleInputChange(e.target.value);
            optimizesHandleInputChange(e.target.value);
          }}
          onFocus={() => setIsDropdownOpened(true)}
        />
      </form>

      <button type={'button'} className={styles.search__submit} onClick={(e) => handleSearch(e)}>
        <SearchIcon/>
      </button>

      <button type={'button'} className={styles['search__submit-mob']}>
        <SearchIcon/>
      </button>

      {isDropdownOpened && (<div className={styles.search__result}>
        {isLoading && <Loader/>}

        {!isLoading && searchResult.length === 0 && (
          <p className={styles['search__empty']}>
            По вашему запросу ничего не найдено
          </p>
        )}

        {!isLoading && searchResult.length > 0 && (
          <>
            <ul className={styles.search__list}>
              {searchResult.map((result) => (
                <SearchItem
                  key={result.id}
                  title={result.name}
                  imgSrc={result.poster.previewUrl}
                  year={result.year}
                  rating={result.rating.kp}
                />
              ))}
            </ul>

            <button className={styles['search__view-all']} onClick={(e) => handleSearch(e)}>
                  Показать все
            </button>
          </>
        )}
      </div>)
      }
    </div>
  );
};