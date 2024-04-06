import type { Metadata } from 'next';
import Search from './page';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Результаты поиска',
    description: 'Результаты поиска фильмов по запросу',
  };
}

export default Search;
