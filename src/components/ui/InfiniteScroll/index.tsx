'use client';

import { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  hasMore: boolean;
  loadMore: () => void;
}

export default function InfiniteScroll({
  hasMore,
  loadMore,
}: InfiniteScrollProps) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([element]) => {
      if (element?.isIntersecting && hasMore) {
        loadMore();
      }
    });

    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadMore]);

  return <div ref={observerRef} />;
}
