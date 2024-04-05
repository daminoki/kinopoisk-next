'use client';

import { IFilm } from '@/entities/films';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import styles from './FilmFacts.module.scss';

interface FilmFactsProps {
  film: IFilm;
}

export default function FilmFacts({ film }: FilmFactsProps) {
  const [factsList, setFactsList] = useState(film.facts.slice(0, 3));

  const handleButtonClick = () => {
    setFactsList(film.facts);
  };

  return (
    <div className={styles['film-facts']}>
      <p className={styles['film-facts__title']}>
        Знаете ли вы, что…
      </p>

      <ul className={styles['film-facts__list']}>
        {factsList.map((fact) => (
          <li key={fact.value} className={styles['film-facts__item']}>
            <p dangerouslySetInnerHTML={{ __html: fact.value }} />
          </li>
        ))}
      </ul>

      {film.facts.length > 3 && film.facts.length !== factsList.length && (
        <div className={styles['film-facts__button']}>
          <Button
            className={styles['film-facts__more']}
            onClick={handleButtonClick}
            group="primary"
            type="button"
          >
            Показать еще
          </Button>
        </div>
      )}
    </div>
  );
}
