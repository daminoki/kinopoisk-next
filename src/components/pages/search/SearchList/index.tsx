import { useEffect } from 'react';
import SearchItem from '@/components/pages/search/SearchItem';
import Loader from '@/components/ui/Loader';
import useOnScreen from '@/hooks/useOnScreen';
import styles from './SearchList.module.scss';

export default function SearchList({
  searchResult, isLoading, hasMore, loadMore,
}) {
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
    }
  }, [isIntersecting, hasMore, loadMore, observer]);

  return (
    <>
      <ul className={styles['search-list']}>
        {searchResult.map((item, id) => (
          <SearchItem
            key={item.id}
            title={item.name}
            imgSrc={item.poster.previewUrl}
            year={item.year}
            count={id + 1}
            altName={item.alternativeName}
            genre={item.genres[0]?.name}
            duration={item.movieLength}
            description={item.description}
            top250={item.top250}
            id={item.id}
          />
        ))}

        {isLoading && <Loader />}
      </ul>

      <div ref={measureRef} />
    </>

  );
}
