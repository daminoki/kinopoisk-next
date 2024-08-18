import type { IPerson } from '@/entities/persons';
import formatDate from '@/utils/formatDate';
import getDeclensions from '@/utils/getDeclensions';

import styles from './NameInfo.module.scss';

interface INameInfoProps {
  person: IPerson;
}

export default function NameInfo({ person }: INameInfoProps) {
  function pluralizeAge(age: number) {
    const suffixes = {
      zero: 'лет',
      one: 'год',
      two: 'года',
      few: 'года',
      many: 'лет',
      other: 'лет',
    };

    return `${age} ${getDeclensions(age, suffixes)}`;
  }

  return (
    <div className={styles['name-info']}>
      <h1 className={styles['name-info__title']}>
        {person.name || person.enName}
      </h1>

      <div className={styles['name-info__subtitle']}>О персоне</div>

      <div className={styles['name-info__about']}>
        {person.profession && person.profession.length > 0 && (
          <div className={styles['name-info__about-item']}>
            <div className={styles['name-info__about-title']}>Профессия</div>
            <div className={styles['name-info__about-text']}>
              {person.profession.map((item) => item.value).join(', ')}
            </div>
          </div>
        )}

        {person.growth && (
          <div className={styles['name-info__about-item']}>
            <div className={styles['name-info__about-title']}>Рост</div>
            <div className={styles['name-info__about-text']}>
              {person.growth} см
            </div>
          </div>
        )}

        {person.birthday && (
          <div className={styles['name-info__about-item']}>
            <div className={styles['name-info__about-title']}>
              Дата рождения
            </div>
            <div className={styles['name-info__about-text']}>
              <p>{formatDate(new Date(person.birthday))}</p>
              {person.age && <p>{pluralizeAge(person.age)}</p>}
            </div>
          </div>
        )}

        {person.death && (
          <div className={styles['name-info__about-item']}>
            <div className={styles['name-info__about-title']}>Дата смерти</div>
            <div className={styles['name-info__about-text']}>
              {formatDate(new Date(person.death))}
            </div>
          </div>
        )}

        {person.birthPlace && person.birthPlace.length > 0 && (
          <div className={styles['name-info__about-item']}>
            <div className={styles['name-info__about-title']}>
              Место рождения
            </div>
            <div className={styles['name-info__about-text']}>
              {person.birthPlace.map((item) => item.value).join(', ')}
            </div>
          </div>
        )}

        {person.deathPlace && person.deathPlace.length > 0 && (
          <div className={styles['name-info__about-item']}>
            <div className={styles['name-info__about-title']}>Место смерти</div>
            <div className={styles['name-info__about-text']}>
              {person.deathPlace.map((item) => item.value).join(', ')}
            </div>
          </div>
        )}

        {person.spouses && (
          <div className={styles['name-info__about-item']}>
            <div className={styles['name-info__about-title']}>Супруг(а)</div>
            <div className={styles['name-info__about-text']} />
          </div>
        )}
      </div>
    </div>
  );
}
