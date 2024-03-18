'use client';

import styles from './page.module.scss';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getSearchResult } from '@/api';


export default function Search() {
  const queryParams = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 10,
    query: ''
  });

  const fetchSearchResult = async () => {
    const result = await getSearchResult(searchParams);

    setSearchResult(result.docs);
  };

  useEffect(() => {
    console.log(queryParams.get('query'));
    setSearchParams({
      ...searchParams,
      query: queryParams.get('query')
    });
  }, [queryParams]);

  useEffect(() => {
    async function fetchData() {
      await fetchSearchResult();
    }

    fetchData();
  }, [searchParams]);

  return (
    <div className={styles.search}>
      <div className={`${styles.search__container} container`}>
        <h1>Результаты поиска</h1>
      </div>
    </div>
  );
}
