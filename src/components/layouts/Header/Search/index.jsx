import styles from './Search.module.scss';
import SearchIcon from '../../../../../public/icons/search.svg';
import { debounce } from '@/utils/debounce';
import { useState, useEffect, useMemo, useRef } from 'react';
import { SearchItem } from '@/components/layouts/Header/Search/SearchItem';
import { getSearchResult } from '@/api';
import Link from 'next/link';
export const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 10,
    query: ''
  });
  const [searchValue, setSearchValue] = useState('');
  const ref = useRef();
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

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
      await fetchSearchResult();
    }

    fetchData();
  }, [searchParams.query]);

  return (
    <div className={styles.search}>
      <input value={searchValue} className={styles.search__input} type={'search'} placeholder={'Найти'}
        onChange={(e) => {
          handleInputChange(e.target.value);
          optimizesHandleInputChange(e.target.value);}}
        onFocus={() => setIsDropdownOpened(true)}
      />

      <button type={'button'} className={styles.search__submit}>
        <SearchIcon/>
      </button>

      { isDropdownOpened && (<div className={styles.search__result}>
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

        {searchResult.length > 0 && (
          <Link href={{
            pathname: '/search',
            query: { query: searchParams.query },
          }}
          className={styles['search__view-all']} onClick={() => setIsDropdownOpened(false)}>
              Показать все
          </Link>
        )}
      </div>)
      }
    </div>
  );
};