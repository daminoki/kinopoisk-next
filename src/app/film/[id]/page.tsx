import { IFilm } from '@/entities/films';
import api from '@/api';
import type { Metadata } from 'next';
import FilmSidebar from '@/components/pages/film/FilmSidebar';
import FilmInfo from '@/components/pages/film/FilmInfo';
import FilmMore from '@/components/pages/film/FilmMore';
import styles from './page.module.scss';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const film: IFilm = await api.movie.getFilm(params.id);

  return {
    title: film?.name,
    description: film?.shortDescription,
  };
}

export default async function FilmPage({ params }: { params: { id: string } }) {
  const film: IFilm = await api.movie.getFilm(params.id);

  return (
    <>
      <div className={styles.film}>
        <div className={styles.film__media}>
          <FilmSidebar film={film} />
        </div>

        <div className={styles.film__info}>
          <FilmInfo film={film} />
        </div>
      </div>

      <div className={styles['film-more']}>
        <FilmMore film={film} />
      </div>
    </>
  );
}
