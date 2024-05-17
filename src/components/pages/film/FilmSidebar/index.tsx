import Image from 'next/image';

import type { IFilm } from '@/entities/films';
import getImg from '@/utils/getImg';

import styles from './FilmSidebar.module.scss';

interface FilmSidebarProps {
  film: IFilm;
}

export default function FilmSidebar({ film }: FilmSidebarProps) {
  return (
    <>
      <div className={styles['film-sidebar__img']}>
        <Image
          src={getImg(film.poster?.previewUrl)}
          alt={film.name ? film.name : 'Изображение'}
          width={300}
          height={450}
        />
      </div>

      {film.videos &&
        film.videos.trailers &&
        film.videos.trailers.length > 0 &&
        film.videos.trailers[0]?.url && (
          <div className={styles['film-sidebar__video']}>
            <iframe
              width="100%"
              height="100%"
              allowFullScreen
              title={film.name ? film.name : 'Видео'}
              src={film.videos.trailers[0].url}
            />
          </div>
        )}
    </>
  );
}
