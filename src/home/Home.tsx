import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSticky from '../common/hooks/useSticky';
import { SocialMediaBar } from '../components/SocialMediaBar/SocialMediaBar';
import { SubscriptionBox } from '../components/SubscriptionBox/SubscriptionBox';
import { authRoutes } from '../routes';
import { useHomeStyles } from './Home.styles';

const ParalaxHeader: React.FC = () => {
  const classes = useHomeStyles();
  const [offset, setOffset] = useState(0);
  const parallaxShift = () => {
    setOffset(window.pageYOffset);
  };

  const { sticky } = useSticky();

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
      <div className={classes.contentContainer}>
        <div className={sticky ? classes.stickyMediaBar : classes.mediaBar}>
          <SocialMediaBar />
        </div>
        <div className={classes.contentStage}>
          <div className={classes.stubbedContent}></div>
          <div className={classes.stubbedContent}></div>
          <div className={classes.stubbedContent}></div>
          <div className={classes.stubbedContent}></div>
          <div className={classes.stubbedContent}></div>
          <div className={classes.stubbedContent}></div>
        </div>
        <div className={sticky ? classes.stickySubBox : classes.subBox}>
          <SubscriptionBox />
        </div>
      </div>
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
