'use client';

import styles from './page.module.scss';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getSearchResult } from '@/api';
import { SearchItem } from '@/components/pages/search/SearchItem';
import Loader from '@/components/ui/Loader';

export default function Search() {
  const queryParams = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 10,
    query: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchResult = async () => {
    if (!searchParams.query) {
      return;
    }

    const result = await getSearchResult(searchParams);

    setSearchResult(result.docs);
  };

  useEffect(() => {
    setSearchParams({
      ...searchParams,
      query: queryParams.get('query')
    });
  }, [queryParams]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await fetchSearchResult();
      setIsLoading(false);
    }

    fetchData();
  }, [searchParams]);

  return (
    <div className={styles.search}>
      <div className='container'>
        <h1 className={styles.search__title}>Результаты поиска</h1>

        {isLoading && <Loader />}

        {!isLoading && searchResult.length === 0 && (
          <p className={styles.search__empty}>По вашему запросу ничего не найдено</p>
        )}

        {!isLoading && searchResult.length > 0 && (
          <ul className={styles.search__result}>
            {searchResult.map((item) => (
              <SearchItem
                key={item.id}
                title={item.name}
                imgSrc={item.poster.previewUrl}
                year={item.year}
                rating={item.rating.kp}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
