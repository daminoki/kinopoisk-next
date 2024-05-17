'use client';

import { useEffect, useState } from 'react';

import api from '@/api';
import PopularTvShow from '@/components/pages/index/PopularTvShows/PopularTvShow';
import Loader from '@/components/ui/Loader';
import Slider from '@/components/ui/Slider';
import type { IFilm } from '@/entities/films';

import styles from './NewReleases.module.scss';

export default function NewReleases() {
  const [isLoading, setIsLoading] = useState(true);
  const [newReleases, setNewReleases] = useState<IFilm[] | []>([]);

  const searchParams = {
    page: 1,
    limit: 15,
    year: '2024',
    sortField: 'rating.kp',
    sortType: '-1',
    'votes.kp': '50000 - 1000000',
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
        <div className={styles['new-releases__slider']}>
          <Slider
            spaceBetween={20}
            slidesPerView="auto"
            slides={newReleases}
            wrapperClassName="new-releases-controls"
            slideClassName={styles['new-releases__slide']}
            controlsClassName={styles['new-releases__controls']}
          >
            {newReleases.map((release) => (
              <PopularTvShow show={release} key={release.id} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
