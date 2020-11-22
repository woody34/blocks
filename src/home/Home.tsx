import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authRoutes } from '../routes';
import { useHomeStyles } from './Home.styles';

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
          <li className={classes.navLinkContainer}>
            <Link className={classes.navLink} to={authRoutes.home}>
              Home
            </Link>
          </li>
          <li className={classes.navLinkContainer}>
            <Link
              className={classes.navLink}
              to={authRoutes.podcast}
              data-cy={authRoutes.podcast}>
              Podcast
            </Link>
          </li>
          <li className={classes.navLinkContainer}>
            <Link className={classes.navLink} to={authRoutes.home}>
              Code
            </Link>
          </li>
          <li className={classes.navLinkContainer}>
            <Link className={classes.navLink} to={authRoutes.home}>
              Contact Us
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <ParalaxHeader></ParalaxHeader>
    </>
  );
};

export default Home;
