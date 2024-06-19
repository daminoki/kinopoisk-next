import SearchItem from '@/components/pages/search/SearchItem';
import InfiniteScroll from '@/components/ui/InfiniteScroll';
import Loader from '@/components/ui/Loader';
import type { ISingleSearchResult } from '@/entities/films';

import styles from './SearchList.module.scss';

interface SearchListProps {
  searchResult: ISingleSearchResult[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
}

export default function SearchList({
  searchResult,
  isLoading,
  hasMore,
  loadMore,
}: SearchListProps) {
  return (
    <>
      <ul className={styles['search-list']}>
        {searchResult.map((item, index) => (
          <li className={styles['search-list__item']} key={item.id}>
            <SearchItem film={item} index={index} />
          </li>
        ))}
      </ul>

      {isLoading && <Loader />}

      {!isLoading && <InfiniteScroll hasMore={hasMore} loadMore={loadMore} />}
    </>
  );
}
