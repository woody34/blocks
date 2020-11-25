import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSticky } from '../common/hooks/useSticky';
import { SocialMediaBar } from '../components/SocialMediaBar/SocialMediaBar';
import { SubscriptionBox } from '../components/SubscriptionBox/SubscriptionBox';
import { authRoutes } from '../routes';
import { AppState } from '../store/app/types';
import { State } from '../store/types';
import { useHomeStyles } from './Home.styles';

const ParalaxHeader: React.FC = () => {
  const classes = useHomeStyles();
  const { yOffset, isNavSticky } = useSelector<State, AppState>(
    ({ app }: State) => app,
  );
  useSticky();

  return (
    <div className={classes.App}>
      <header
        className={classes.headerBackground}
        style={{ backgroundPositionY: yOffset }}>
        <div className={classes.typography}></div>
        <div
          className={classes.techStack}
          style={{ backgroundPositionY: yOffset }}></div>
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
        <div
          className={isNavSticky ? classes.stickyMediaBar : classes.mediaBar}>
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
        <div className={isNavSticky ? classes.stickySubBox : classes.subBox}>
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
