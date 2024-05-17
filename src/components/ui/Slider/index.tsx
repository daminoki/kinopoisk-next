import 'swiper/css';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderButton from '@/components/ui/SliderButton';
import type { IFilm } from '@/entities/films';

import styles from './Slider.module.scss';

interface ISliderProps {
  spaceBetween: number;
  slidesPerView: number | 'auto';
  slides: IFilm[];
  wrapperClassName: string;
  slideClassName?: string;
  controlsClassName?: string;
  children: React.ReactNode[];
}

export default function Slider({
  spaceBetween,
  slidesPerView,
  slides,
  wrapperClassName,
  slideClassName,
  controlsClassName,
  children,
}: ISliderProps) {
  const slideClasses = slideClassName
    ? `${styles.slide} ${slideClassName}`
    : styles.slide;
  const controlsClasses = controlsClassName
    ? `${controlsClassName}`
    : styles.controls;

  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${wrapperClassName} .swiper-button-next`,
          prevEl: `.${wrapperClassName} .swiper-button-prev`,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className={slideClasses}>
            {children[index]}
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={
          controlsClasses ? `${controlsClasses} ${wrapperClassName}` : ''
        }
      >
        <SliderButton direction="prev" className="swiper-button-prev" />
        <SliderButton direction="next" className="swiper-button-next" />
      </div>
    </>
  );
}
