'use client';

import styles from './PopularTvShows.module.scss';
import 'swiper/css';

import { useState, useEffect } from 'react';
import { getPopularTvShows } from '@/api';
import { Swiper, SwiperSlide} from 'swiper/react';
import { PopularTvShow } from '@/components/pages/index/PopularTvShows/PopularTvShow';
import Loader from '@/components/ui/Loader';

export const PopularTvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = {
    page: '1',
    limit: '15',
    type: 'tv-series',
    top250: '!null',
    sortField: 'rating.kp',
    sortType: '-1',
  };

  const fetchShows = async () => {
    const { docs } = await getPopularTvShows(searchParams);

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
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
        >
          {tvShows.map((show) => (
            <SwiperSlide key={show.id} className={styles.popular__slide}>
              <PopularTvShow show={show} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};