import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SliderButton from '@/components/ui/SliderButton';
import styles from './Slider.module.scss';

interface ISliderProps {
  spaceBetween: number;
  slidesPerView: number | 'auto';
  slides: any[];
  wrapperClassName: string;
  slideClassName?: string;
  controlsClassName?: string;
  children: React.ReactNode;
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
  const slideClasses = slideClassName ? `${styles.slide} ${slideClassName}` : styles.slide;
  const controlsClasses = controlsClassName ? `${controlsClassName}` : styles.controls;

  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Navigation]}
        navigation={
          {
            nextEl: `.${wrapperClassName} .swiper-button-next`,
            prevEl: `.${wrapperClassName} .swiper-button-prev`,
          }
        }
      >
        {slides.map((slide, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index} className={slideClasses}>
            {children[index]}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={controlsClasses ? `${controlsClasses} ${wrapperClassName}` : ''}>
        <SliderButton direction="prev" className="swiper-button-prev" />
        <SliderButton direction="next" className="swiper-button-next" />
      </div>
    </>
  );
}
