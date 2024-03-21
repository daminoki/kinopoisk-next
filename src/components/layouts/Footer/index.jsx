import styles from './Footer.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__info}>
          <p className={styles.footer__years}>© 2024 - {new Date().getFullYear()}, Kinopoisk Clone</p>
          <p className={styles.footer__author}>Creator: <a href="https://github.com/daminoki"
            className={styles.footer__link}
            target="_blank">github.com/daminoki</a></p>
        </div>
        <ul className={styles.footer__socials}>
          <li className={styles.footer__social}>
            <a href="https://github.com/daminoki" className={styles['footer__social-link']} target="_blank">
              <GitHubIcon sx={{
                color: '#141414',
                transition: 'color .2s ease-in-out',
                ':hover': {
                  color: '#f50',
                }
              }}/>
            </a>
          </li>
          <li className={styles.footer__social}>
            <a href="https://t.me/aminokislota1408" className={styles['footer__social-link']} target="_blank">
              <TelegramIcon sx={{
                color: '#141414',
                transition: 'color .2s ease-in-out',
                ':hover': {
                  color: '#f50',
                }
              }}/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};