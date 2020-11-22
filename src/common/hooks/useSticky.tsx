import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { authRoutes } from '../../routes';

function useSticky() {
  const [sticky, setSticky] = useState(false);
  const [home, setHome] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (location.pathname != authRoutes.home) {
      setSticky(true);
      setHome(false);
    } else {
      setHome(true);
      window.scrollY > 765 ? setSticky(true) : setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  const locationUpdate = () => {
    handleScroll();
  };

  return { sticky, home, locationUpdate };
}

export default useSticky;
