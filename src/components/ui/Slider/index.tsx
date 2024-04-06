import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SliderButton from '@/components/ui/SliderButton';
import styles from './Slider.module.scss';

interface ISliderProps {
  spaceBetween: number;
  slidesPerView: number | 'auto';
  slides: any[];
  slideClassName?: string;
  controlsClassName?: string;
  children: React.ReactNode;
}

export default function Slider({
  spaceBetween, slidesPerView, slides, slideClassName, controlsClassName, children,
}: ISliderProps) {
  const slideClasses = slideClassName ? `${styles.slide} ${slideClassName}` : styles.slide;
  const controlsClasses = controlsClassName ? `${styles.controls} ${controlsClassName}` : styles.controls;

  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Navigation]}
        navigation={
          {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={slideClassName}>
            {children[index]}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={controlsClasses}>
        <SliderButton direction="prev" className="swiper-button-prev" />
        <SliderButton direction="next" className="swiper-button-next" />
      </div>
    </>
  );
}
