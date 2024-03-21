import styles from './SearchList.module.scss';

import { useEffect } from 'react';
import { SearchItem } from '@/components/pages/search/SearchItem';
import Loader from '@/components/ui/Loader';
import useOnScreen from '@/hooks/useOnScreen';

export const SearchList = ({ searchResult, isLoading, hasMore, loadMore }) => {
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting, hasMore, loadMore]);

  return (
    <ul className={styles['search-list']}>
      {searchResult.map((item, id) => {
        if (id === searchResult.length - 1) {
          return (
            <SearchItem
              key={item.id}
              mesureRef={measureRef}
              title={item.name}
              imgSrc={item.poster.previewUrl}
              year={item.year}
              count={id + 1}
              altName={item.alternativeName}
              genre={item.genres[0].name}
              duration={item.movieLength}
              description={item.description}
              top250={item.top250}
            />
          );
        }

        return (
          <SearchItem
            key={id}
            title={item.name}
            imgSrc={item.poster.previewUrl}
            year={item.year}
            count={id + 1}
            altName={item.alternativeName}
            genre={item.genres[0]?.name}
            duration={item.movieLength}
            description={item.description}
            top250={item.top250}
          />
        );
      })}

      {isLoading && <Loader />}
    </ul>
  );
};