import type { Metadata } from 'next';

import api from '@/api';
import NameImg from '@/components/pages/name/NameImg';
import NameInfo from '@/components/pages/name/NameInfo';
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

  console.log(person);

  return (
    <div className={styles.person}>
      <div className={styles.person__base}>
        <NameImg imgSrc={person.photo} name={person.name} />
        <NameInfo person={person} />
      </div>
    </div>
  );
}
