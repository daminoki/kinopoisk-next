'use client';

import { useEffect, useState } from 'react';

import Button from '@/components/ui/Button';

import styles from './NameFacts.module.scss';

interface INameFactsProps {
  facts: { value: string }[] | undefined;
}

export default function NameFacts({ facts }: INameFactsProps) {
  const [factsList, setFactsList] = useState(facts?.slice(0, 3));
  const [factsListLength, setFactsListLength] = useState(3);

  const handleButtonClick = () => {
    setFactsListLength((prevLength) => prevLength + 3);
  };

  useEffect(() => {
    setFactsList(facts?.slice(0, factsListLength));
  }, [factsListLength, facts]);

  return (
    <div className={styles['name-facts']}>
      <h2 className={styles['name-facts__title']}>Интересные факты</h2>

      <ul className={styles['name-facts__list']}>
        {factsList?.map((fact) => (
          <li key={fact.value} className={styles['name-facts__item']}>
            <p dangerouslySetInnerHTML={{ __html: fact.value }} />
          </li>
        ))}
      </ul>

      {facts && facts.length > 3 && facts.length !== factsList?.length && (
        <div className={styles['name-facts__button']}>
          <Button
            className={styles['name-facts__more']}
            onClick={handleButtonClick}
            group="primary"
          >
            Показать еще
          </Button>
        </div>
      )}
    </div>
  );
}
