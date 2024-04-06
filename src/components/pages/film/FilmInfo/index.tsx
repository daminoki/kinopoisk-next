import { IFilm } from '@/entities/films';
// eslint-disable-next-line import/no-extraneous-dependencies
import pluralize from 'pluralize';
import Link from 'next/link';
import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import getImg from '@/utils/getImg';
import styles from './FilmInfo.module.scss';

interface IFilmInfoProps {
  film: IFilm;
}

export default function FilmInfo({ film }: IFilmInfoProps) {
  const professions: string[] = Array.from(new Set(
    film.persons.map((person) => person.profession),
  ));

  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return format(date, 'd MMMM yyyy', { locale: ru });
  };

  function getRatingClasses(rating) {
    if (rating > 7) {
      return `${styles['film-info__rating-value_high']} ${styles['film-info__rating-value']}`;
    } if (rating < 5) {
      return `${styles['film-info__rating-value_low']} ${styles['film-info__rating-value']}`;
    }
    return styles['film-info__rating-value'];
  }

  function getMobRatingClasses(rating) {
    if (rating > 7) {
      return `${styles['film-info__rating-mob_high']} ${styles['film-info__rating-mob']}`;
    } if (rating < 5) {
      return `${styles['film-info__rating-mob_low']} ${styles['film-info__rating-mob']}`;
    }
    return styles['film-info__rating-mob'];
  }

  return (
    <>
      <div className={styles['film-info']} style={{ backgroundImage: `url(${getImg(film.poster.url)})` }}>
        {film.name && film.rating.kp !== 0 && (
          <div className={styles['film-info__title-wrapper']}>
            <h1 className={styles['film-info__title']}>{film.name}</h1>
            <div className={styles['film-info__rating']}>
              <span className={getRatingClasses(Number(film.rating.kp.toFixed(1)))}>
                {film.rating.kp.toFixed(1)}
              </span>
              <span className={styles['film-info__rating-name']}>рейтинг КиноПоиска</span>
            </div>
          </div>
        )}

        {film.name && film.rating.kp === 0 && (
          <h1 className={styles['film-info__title']}>{film.name}</h1>
        )}

        {film.alternativeName && (
          <p className={styles['film-info__alt-title']}>
            {film.alternativeName}
            {' '}

            {film.ageRating && (
              <span className={styles['film-info__age-rating']}>
                {film.ageRating}
                +
              </span>
            )}
          </p>
        )}

        {film.shortDescription && (
          <p className={styles['film-info__description']}>{film.shortDescription}</p>
        )}

        {film.rating.kp !== 0 && (
          <div className={getMobRatingClasses(Number(film.rating.kp.toFixed(1)))}>
            <span className={styles['film-info__rating-value']}>
              {film.rating.kp.toFixed(1)}
            </span>
          </div>
        )}
      </div>

      <div className={styles['film-info__subtitle']}>О фильме</div>

      <div className={styles['film-info__about']}>
        {film.year && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Год производства</p>
            <p className={styles['film-info__about-text']}>
              {film.year}
              {film.isSeries && (
                <>
                  {' '}
                  <span>
                    (
                    {(film.seasonsInfo.length)}
                    {' '}
                    {pluralize('season', film.seasonsInfo.length)}
                    )
                  </span>
                </>
              )}
            </p>
          </div>
        )}

        {film.countries.length > 0 && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Страна</p>
            <p className={styles['film-info__about-text']}>
              {
                film.countries?.map((country) => country.name).join(', ')
              }
            </p>
          </div>
        )}

        {film.genres.length > 0 && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Жанр</p>
            <p className={styles['film-info__about-text']}>
              {
                film.genres?.map((genre) => genre.name).join(', ')
              }
            </p>
          </div>
        )}

        {film.slogan && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Слоган</p>
            <p className={styles['film-info__about-text']}>{film.slogan}</p>
          </div>
        )}

        {
          professions.length > 0 && (
            <>
              {professions.map((profession, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={styles['film-info__about-item']}>
                  <p className={styles['film-info__about-title']}>{profession.charAt(0).toUpperCase() + profession.slice(1)}</p>
                  <p className={styles['film-info__about-text']}>
                    {film.persons
                      .filter((person) => person.profession === profession)
                      .map((person, ind) => (
                        <React.Fragment key={person.id}>
                          {ind > 0 && ', '}
                          <Link href={`/name/${person.id}`}>
                            {person.name || person.enName}
                          </Link>
                        </React.Fragment>
                      ))}
                  </p>
                </div>
              ))}
            </>
          )
        }

        {film.budget.value && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Бюджет</p>
            <p className={styles['film-info__about-text']}>
              {formatNumber(film.budget.value)}
              {' '}
              {film.budget.currency}
            </p>
          </div>
        )}

        {film.fees.world.value && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Сборы в мире</p>
            <p className={styles['film-info__about-text']}>
              {formatNumber(film.fees.world.value)}
              {' '}
              {film.fees.world.currency}
            </p>
          </div>
        )}

        {film.premiere.world && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Премьера в мире</p>
            <p className={styles['film-info__about-text']}>
              {formatDate(film.premiere.world)}
            </p>
          </div>
        )}

      </div>
    </>
  );
}
