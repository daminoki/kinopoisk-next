import type { Metadata } from 'next';

import api from '@/api';
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

  return <div className={styles.person}>{person.name}</div>;
}
