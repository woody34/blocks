import { useEffect, useState } from 'react';

function useSticky() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    window.scrollY > 765 ? setSticky(true) : setSticky(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  return { isSticky };
}

export default useSticky;
