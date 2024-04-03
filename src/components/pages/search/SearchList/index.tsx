import SearchItem from '@/components/pages/search/SearchItem';
import Loader from '@/components/ui/Loader';
import InfiniteScroll from '@/components/ui/InfiniteScroll';
import styles from './SearchList.module.scss';

interface SearchListProps {
  searchResult: {
    id: number;
    name: string;
    alternativeName: string;
    year: number;
    description: string;
    genres: { name: string }[];
    movieLength: number;
    poster: {
      previewUrl: string;
    };
    top250: boolean;
  }[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
}

export default function SearchList({
  searchResult, isLoading, hasMore, loadMore,
}: SearchListProps) {
  return (
    <>
      <ul className={styles['search-list']}>
        {searchResult.map((item, index) => (
          <li className={styles['search-list__item']} key={index}>
            <SearchItem
              film={item}
              index={index}
            />
          </li>
        ))}
      </ul>

      {isLoading && <Loader />}

      {!isLoading && <InfiniteScroll hasMore={hasMore} loadMore={loadMore} />}
    </>
  );
}
