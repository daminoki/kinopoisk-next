import { IFilm } from '@/entities/films';
import getImg from '@/utils/getImg';
import Image from 'next/image';
import Link from 'next/link';
import FilmFacts from '@/components/pages/film/FilmFacts';
import styles from './FilmMore.module.scss';

interface FilmMoreProps {
  film: IFilm;
}

export default function FilmMore({ film }: FilmMoreProps) {
  return (
    <div className={styles['film-more']}>
      {film.description && (
        <>
          <p className={styles['film-more__title']}>Описание</p>
          <p className={styles['film-more__text']}>{film.description}</p>
        </>
      )}

      {film.similarMovies.length > 0 && (
        <div className={styles['film-more__similar']}>
          <p className={styles['film-more__title']}>Похожие фильмы</p>
          <ul className={styles['film-more__similar-list']}>
            {film.similarMovies.slice(0, 5)
              .map((similarFilm) => (
                <li key={similarFilm.id} className={styles['film-more__similar-item']}>
                  <Link href={`/film/${similarFilm.id}`} className={styles['film-more__similar-link']}>
                    <div className={styles['film-more__similar-img']}>
                      <Image
                        src={getImg(similarFilm.poster.previewUrl)}
                        alt={similarFilm.name}
                        width={150}
                        height={225}
                      />
                      {similarFilm.rating?.kp && (
                        <div className={styles['film-more__similar-rating']}>
                          {similarFilm.rating.kp.toFixed(1)}
                        </div>
                      )}
                    </div>

                    <p className={styles['film-more__similar-name']}>{similarFilm.name}</p>
                    <p className={styles['film-more__similar-info']}>
                      {similarFilm.alternativeName && (
                        <span>{similarFilm.alternativeName}</span>
                      )}

                      {similarFilm.year && similarFilm.alternativeName && ', '}

                      {similarFilm.year && (
                        <span>{similarFilm.year}</span>
                      )}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}

      {film.facts?.length > 0 && (
        <FilmFacts film={film} />
      )}
    </div>
  );
}
