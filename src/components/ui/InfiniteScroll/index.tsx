'use client';

import { useEffect, useRef } from 'react';

export default function InfiniteScroll({ hasMore, loadMore }) {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([element]) => {
      if (element.isIntersecting && hasMore) {
        loadMore();
      }
    });

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore]);

  return (
    <div ref={observerRef} />
  );
}
