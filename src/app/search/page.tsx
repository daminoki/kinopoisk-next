'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { getSearchResult } from '@/api';
import SearchList from '@/components/pages/search/SearchList';
import Loader from '@/components/ui/Loader';
import styles from './page.module.scss';

export default function Search() {
  const queryParams = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 10,
    query: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [searchResultTotal, setSearchResultTotal] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);

  const fetchSearchResult = async () => {
    if (!searchParams.query) {
      return;
    }

    const { docs, total, pages } = await getSearchResult(searchParams);

    setSearchResult((prevSearchResult) => {
      if (searchParams.page > 1) {
        return [...prevSearchResult, ...docs];
      }
      return docs;
    });

    setSearchResultTotal(total);
    setHasMore(pages > searchParams.page);
    setIsLoading(false);
  };

  const loadMore = useCallback(() => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      page: prevSearchParams.page + 1,
    }));

    setIsMoreLoading(true);
  }, []);

  useEffect(() => {
    setSearchParams({
      ...searchParams,
      query: queryParams.get('query'),
      page: 1,
    });
  }, [queryParams]);

  useEffect(() => {
    async function fetchData() {
      await fetchSearchResult();
      setIsMoreLoading(false);
    }

    fetchData();
  }, [searchParams]);

  return (
    <div className={styles.search}>
      <h1 className={styles.search__title}>Результаты поиска</h1>
      {isLoading && <Loader />}

      {!isLoading && searchResultTotal === 0 && (
        <p className={styles.search__empty}>По вашему запросу ничего не найдено</p>
      )}

      {!isLoading && searchResult.length > 0 && (
        <>
          <p className={styles.search__total}>
            Всего найдено:
            {searchResultTotal}
          </p>

          <SearchList
            searchResult={searchResult}
            isLoading={isMoreLoading}
            hasMore={hasMore}
            loadMore={loadMore}
          />
        </>
      )}
    </div>
  );
}
