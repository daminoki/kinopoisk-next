import { useCallback, useState } from 'react';

const useOnScreen = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
} = {}) => {
  const [observer, setObserver] = useState<IntersectionObserver>();
  const [isIntersecting, setIntersecting] = useState(false);

  const measureRef = useCallback(
    (node) => {
      if (node) {
        const intersectionObserver = new IntersectionObserver(
          ([entry]) => {
            setIntersecting(entry.isIntersecting);
          },
          { root, rootMargin, threshold },
        );

        intersectionObserver.observe(node);
        setObserver(intersectionObserver);
      }
    },
    [root, rootMargin, threshold],
  );

  return { measureRef, isIntersecting, observer };
};

export default useOnScreen;
