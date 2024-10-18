import type { Metadata } from 'next';

import api from '@/api';
import NameFacts from '@/components/pages/name/NameFacts';
import NameImg from '@/components/pages/name/NameImg';
import NameInfo from '@/components/pages/name/NameInfo';
import NamePopular from '@/components/pages/name/NamePopular';
import type { IPerson } from '@/entities/persons';

import styles from './page.module.scss';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const person = await api.person.getPerson(params.id);

  return {
    title: person?.name,
    description: person?.enName,
  };
}

export default async function PersonPage({
  params,
}: {
  params: { id: string };
}) {
  const person: IPerson = await api.person.getPerson(params.id);

  const mostPopularMovies = person.movies
    ?.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .filter(
      (movie, index, self) =>
        index === self.findIndex((m) => m.id === movie.id),
    )
    .slice(0, 5);

  console.log(mostPopularMovies);

  return (
    <div className={styles.person}>
      <div className={styles.person__base}>
        <NameImg imgSrc={person.photo} name={person.name} />
        <NameInfo person={person} />
      </div>

      {mostPopularMovies && mostPopularMovies.length > 0 && (
        <NamePopular movies={mostPopularMovies} />
      )}

      {person.facts && person.facts.length > 0 && (
        <NameFacts facts={person.facts} />
      )}
    </div>
  );
}
