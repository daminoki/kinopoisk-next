import { IFilm } from '@/entities/films';
import api from '@/api';
import type { Metadata } from 'next';
import Image from 'next/image';
import getImg from '@/utils/getImg';
import styles from './page.module.scss';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const film: IFilm = await api.movie.getFilm(params.id);

  return {
    title: film.name,
    description: film.shortDescription,
  };
}

export default async function FilmPage({ params }: { params: { id: string } }) {
  const film: IFilm = await api.movie.getFilm(params.id);

  return (
    <div className={styles.film}>
      <div className={styles.film__media}>
        <div className={styles.film__img}>
          <div className={styles.film__img}>
            <Image src={getImg(film.poster.previewUrl)} alt={film.name} width={300} height={450} />
          </div>
        </div>

        <div className={styles.film__video}>
          {film.videos?.trailers.length > 0
              && film.videos.trailers[0]
              && film.videos.trailers[0].url
              && (
                <iframe
                  width="100%"
                  height="100%"
                  allowFullScreen
                  title={film.name}
                  src={film.videos.trailers[0].url}
                />
              )}
        </div>
      </div>

      <div className={styles.film__info}>
        <h1 className={styles.film__title}>{film.name}</h1>
        {film.alternativeName && <p className={styles['film__alt-title']}>{film.alternativeName}</p>}
      </div>
    </div>
  );
}
