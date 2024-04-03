import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './SliderButton.module.scss';

export default function SliderButton({ direction, className }) {
  return (
    <button className={direction === 'prev' ? `${styles.button} ${styles.button_prev} ${className}` : `${styles.button} ${className}`} type="button" aria-label="Кнопка слайдера">
      <ArrowForwardIosIcon />
    </button>
  );
}
