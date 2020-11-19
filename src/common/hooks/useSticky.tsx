import { useEffect, useState } from 'react';

export interface ISickyProps {
  sticky: boolean;
}

function useSticky(): ISickyProps {
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

  return { sticky: isSticky };
}

export default useSticky;
