import { useSwiper } from 'swiper/react';
import styles from './SliderButton.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SliderButton({ direction, className }) {
  return (
    <button className={direction === 'prev' ? `${styles.button} ${styles['button_prev']} ${className}` : `${styles.button} ${className}`} type={'button'}>
      <ArrowForwardIosIcon />
    </button>
  );
}