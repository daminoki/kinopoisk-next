import { useCallback, useState } from 'react';

const useOnScreen = ({
  root = null,
  rootMargin = '0px',
  threshold = 0
} = {}) => {
  const [observer, setObserver] = useState();
  const [isIntersecting, setIntersecting] = useState(false);

  const measureRef = useCallback(
    (node) => {
      if (node) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIntersecting(entry.isIntersecting);
          },
          { root, rootMargin, threshold }
        );

        observer.observe(node);
        setObserver(observer);
      }
    },
    [root, rootMargin, threshold]
  );

  return { measureRef, isIntersecting, observer };
};

export default useOnScreen;