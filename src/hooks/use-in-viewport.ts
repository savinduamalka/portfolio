import { useEffect, useState } from 'react';

interface UseInViewportOptions extends IntersectionObserverInit {
  once?: boolean;
}
export function useInViewport<T extends HTMLElement>(
  options: UseInViewportOptions = {}
) {
  const { once = false, root, rootMargin, threshold } = options;
  const [node, setNode] = useState<T | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }
    if (typeof IntersectionObserver !== 'function') {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const target = node;
    if (!target) {
      return;
    }

    if (typeof IntersectionObserver !== 'function') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [node, once, root, rootMargin, threshold]);

  return {
    ref: setNode,
    isVisible,
  } as const;
}
