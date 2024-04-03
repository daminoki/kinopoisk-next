'use client';

import 'swiper/css';
import { useState, useEffect } from 'react';
import api from '@/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PopularTvShow from '@/components/pages/index/PopularTvShows/PopularTvShow';
import Loader from '@/components/ui/Loader';
import SliderButton from '@/components/ui/SliderButton';
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
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            modules={[Navigation]}
            navigation={
              {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            }
          >
            {tvShows.map((show) => (
              <SwiperSlide key={show.id} className={styles.popular__slide}>
                <PopularTvShow show={show} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.popular__controls}>
            <SliderButton direction="prev" className="swiper-button-prev" />
            <SliderButton direction="next" className="swiper-button-next" />
          </div>
        </div>
      )}
    </div>
  );
}
