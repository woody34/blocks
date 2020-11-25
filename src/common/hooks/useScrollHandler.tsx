import { useEffect } from 'react';

export const useScrollHandler = (
  handler: () => void,
  cleanup?: () => void,
): void => {
  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      if (cleanup) {
        cleanup();
      }
    };
  }, []);
};
