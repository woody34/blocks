import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authRoutes } from '../routes';
import { useHomeStyles } from './Home.styles';
import useSticky from '../common/hooks/useSticky';
import { Navbar } from '../components/Navbar/Navbar';

const ParalaxHeader: React.FC = () => {
  const classes = useHomeStyles();
  const [offset, setOffset] = useState(0);

  const parallaxShift = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', parallaxShift);
    return () => {
      window.removeEventListener('scroll', parallaxShift);
    };
  });

  return (
    <div className={classes.App}>
      <header
        className={classes.headerBackground}
        style={{ backgroundPositionY: offset }}>
        <div className={classes.typography}></div>
        <div
          className={classes.techStack}
          style={{ backgroundPositionY: offset }}></div>
        <ul className={classes.linkContainer}>
          <li className={classes.navLink}>Home</li>
          <li className={classes.navLink}>Podcast</li>
          <li className={classes.navLink}>Code</li>
          <li className={classes.navLink}>Contact us</li>
        </ul>
      </header>
    </div>
  );
};

const Home: React.FC = () => {
  const { sticky } = useSticky();
  return (
    <>
      <ParalaxHeader></ParalaxHeader>
      <Navbar sticky={sticky} />
      <Link to={authRoutes.podcast} data-cy={authRoutes.podcast}>
        Podcast
      </Link>
    </>
  );
};

export default Home;
