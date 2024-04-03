import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles['loader-body']}>
      <div className={styles['loader-circle']} />
    </div>
  );
}
