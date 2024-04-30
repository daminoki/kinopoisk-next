'use client';

import 'swiper/css';
import { useState, useEffect } from 'react';
import api from '@/api';
import PopularTvShow from '@/components/pages/index/PopularTvShows/PopularTvShow';
import Loader from '@/components/ui/Loader';
import Slider from '@/components/ui/Slider';
import styles from './PopularTvShows.module.scss';

export default function PopularTvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = {
    page: 1,
    limit: 15,
    type: 'tv-series',
    top250: '!null',
    sortField: 'rating.kp',
    'votes.kp': '100000 - 1000000',
    sortType: '-1',
  };

  const fetchShows = async () => {
    const { docs } = await api.movie.getPopularTvShows(searchParams);

    setTvShows(docs);
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      await fetchShows();
    }

    fetchData();
  }, []);

  return (
    <div className={styles.popular}>
      <h2 className={styles.popular__title}>Популярные сериалы</h2>
      {isLoading && <Loader />}

      {!isLoading && !tvShows.length && <div>Упс! Ничего не найдено</div>}

      {!isLoading && tvShows.length && (
        <div className={styles.popular__slider}>
          <Slider
            spaceBetween={20}
            slidesPerView="auto"
            slides={tvShows}
            wrapperClassName="popular-controls"
            slideClassName={styles.popular__slide}
            controlsClassName={styles.popular__controls}
          >
            {tvShows.map((show) => (
              <PopularTvShow show={show} key={show.id} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
