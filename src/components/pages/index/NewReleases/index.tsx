'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';
import api from '@/api';
import styles from './NewReleases.module.scss';

export default function NewReleases() {
  const [isLoading, setIsLoading] = useState(true);
  const [newReleases, setNewReleases] = useState([]);

  const searchParams = {
    page: 1,
    limit: 15,
    'fees.world': '1000-666666',
    'premiere.cinema': '01.01.2024-01.04.2024',
  };

  const fetchNewReleases = async () => {
    const { docs } = await api.movie.getNewReleases(searchParams);

    setNewReleases(docs);
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchNewReleases();
    }

    fetchData();
  }, []);

  return (
    <div className={styles['new-releases']}>
      <h2 className={styles['new-releases__title']}>Свежие релизы</h2>
      {isLoading && <Loader />}

      {!isLoading && !newReleases.length && <div>Упс! Ничего не найдено</div>}

      {!isLoading && newReleases.length && (
        <div className={styles['new-releases__list']}>
          {newReleases.map((release) => (
            <div key={release.id} className={styles['new-releases__item']}>
              <img src={release.poster.url} alt={release.name} />
              <p>{release.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
