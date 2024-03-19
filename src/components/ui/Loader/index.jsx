import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles['loader-body']}>
      <div className={styles['loader-circle']}></div>
    </div>
  );
}

export default Loader;