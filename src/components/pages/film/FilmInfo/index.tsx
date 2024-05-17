import Link from 'next/link';
import { Fragment } from 'react';

import type { IFilm } from '@/entities/films';
import formatPremiereDate from '@/utils/formatDate';
import getDeclensions from '@/utils/getDeclensions';
import getImg from '@/utils/getImg';

import styles from './FilmInfo.module.scss';

interface IFilmInfoProps {
  film: IFilm;
}

export default function FilmInfo({ film }: IFilmInfoProps) {
  function getProfession(): string[] | [] {
    if (!film.persons) return [];

    return [...new Set(film.persons.map((person) => person.profession))];
  }

  function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function getRatingClasses(rating: number) {
    if (rating > 7) {
      return `${styles['film-info__rating-value_high']} ${styles['film-info__rating-value']}`;
    }
    if (rating < 5) {
      return `${styles['film-info__rating-value_low']} ${styles['film-info__rating-value']}`;
    }
    return styles['film-info__rating-value'];
  }

  function getMobRatingClasses(rating: number) {
    if (rating > 7) {
      return `${styles['film-info__rating-mob_high']} ${styles['film-info__rating-mob']}`;
    }
    if (rating < 5) {
      return `${styles['film-info__rating-mob_low']} ${styles['film-info__rating-mob']}`;
    }
    return styles['film-info__rating-mob'];
  }

  function pluralize(n: number | undefined | null) {
    if (!n) return '';

    const suffixes = {
      zero: 'сезонов',
      one: 'сезон',
      two: 'сезона',
      few: 'сезона',
      many: 'сезонов',
      other: 'сезонов',
    };

    return getDeclensions(n, suffixes);
  }

  // @ts-ignore
  return (
    <>
      <div
        className={styles['film-info']}
        style={{ backgroundImage: `url(${getImg(film.poster?.url)})` }}
      >
        {film.rating &&
          film.name &&
          film.rating.kp !== 0 &&
          film.rating.kp !== null && (
            <div className={styles['film-info__title-wrapper']}>
              <h1 className={styles['film-info__title']}>{film.name}</h1>
              <div className={styles['film-info__rating']}>
                <span
                  className={getRatingClasses(
                    Number(film.rating.kp.toFixed(1)),
                  )}
                >
                  {film.rating.kp.toFixed(1)}
                </span>
                <span className={styles['film-info__rating-name']}>
                  рейтинг КиноПоиска
                </span>
              </div>
            </div>
          )}

        {film.rating && film.name && film.rating.kp === 0 && (
          <h1 className={styles['film-info__title']}>{film.name}</h1>
        )}

        {film.alternativeName && (
          <p className={styles['film-info__alt-title']}>
            {film.alternativeName}{' '}
            {film.ageRating && (
              <span className={styles['film-info__age-rating']}>
                {film.ageRating}+
              </span>
            )}
          </p>
        )}

        {film.shortDescription && (
          <p className={styles['film-info__description']}>
            {film.shortDescription}
          </p>
        )}

        {film.rating && film.rating.kp !== 0 && film.rating.kp !== null && (
          <div
            className={getMobRatingClasses(Number(film.rating.kp.toFixed(1)))}
          >
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
                    ({film.seasonsInfo && film.seasonsInfo.length}{' '}
                    {pluralize(film.seasonsInfo?.length)})
                  </span>
                </>
              )}
            </p>
          </div>
        )}

        {film.countries && film.countries.length > 0 && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Страна</p>
            <p className={styles['film-info__about-text']}>
              {film.countries?.map((country) => country.name).join(', ')}
            </p>
          </div>
        )}

        {film.genres && film.genres.length > 0 && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Жанр</p>
            <p className={styles['film-info__about-text']}>
              {film.genres?.map((genre) => genre.name).join(', ')}
            </p>
          </div>
        )}

        {film.slogan && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Слоган</p>
            <p className={styles['film-info__about-text']}>{film.slogan}</p>
          </div>
        )}

        {getProfession().length > 0 && (
          <>
            {getProfession().map((profession) => (
              <div key={profession} className={styles['film-info__about-item']}>
                <p className={styles['film-info__about-title']}>
                  {profession.charAt(0).toUpperCase() + profession.slice(1)}
                </p>
                <p className={styles['film-info__about-text']}>
                  {film.persons &&
                    film.persons
                      .filter((person) => person.profession === profession)
                      .map((person, ind) => (
                        <Fragment key={person.id}>
                          {ind > 0 && ', '}
                          <Link href={`/name/${person.id}`}>
                            {person.name || person.enName}
                          </Link>
                        </Fragment>
                      ))}
                </p>
              </div>
            ))}
          </>
        )}

        {film.budget?.value && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Бюджет</p>
            <p className={styles['film-info__about-text']}>
              {formatNumber(film.budget.value)} {film.budget.currency}
            </p>
          </div>
        )}

        {film.fees?.world?.value && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Сборы в мире</p>
            <p className={styles['film-info__about-text']}>
              {formatNumber(film.fees.world.value)} {film.fees.world.currency}
            </p>
          </div>
        )}

        {film.premiere?.world && (
          <div className={styles['film-info__about-item']}>
            <p className={styles['film-info__about-title']}>Премьера в мире</p>
            <p className={styles['film-info__about-text']}>
              {formatPremiereDate(film.premiere.world)}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
