import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { authRoutes } from '../../routes';
import { AppState } from '../../store/app/types';
import { State } from '../../store/types';
import { useNavbarStyles } from './Navbar.styles';

export const Navbar: React.FC = () => {
  const classes = useNavbarStyles();
  const location = useLocation();
  const isHomePage = authRoutes.home === location.pathname;
  const { isNavSticky } = useSelector<State, AppState>(({ app }) => app);

  const baseNavbarClass = isNavSticky
    ? isHomePage
      ? classes.navbarStickyHome
      : classes.navbarSticky
    : classes.navbar;

  const renderLogo = () =>
    isNavSticky ? (
      <img src={Logo} alt="logo" className={classes.navbarLogo} />
    ) : null;

  return (
    <nav className={baseNavbarClass}>
      <div className={classes.navbarLogoHolder}>
        {renderLogo()}
        <h1 className={classes.logoText}>Software Blocks</h1>
      </div>
      <ul className={classes.navbarLink}>
        <li className={classes.navLinkContainer}>
          <Link className={classes.navbarLinkItem} to={authRoutes.home}>
            Home
          </Link>
        </li>
        <li className={classes.navLinkContainer}>
          <Link
            className={classes.navbarLinkItem}
            to={authRoutes.podcast}
            data-cy={authRoutes.podcast}>
            Podcast
          </Link>
        </li>
        <li className={classes.navLinkContainer}>
          {' '}
          <Link className={classes.navbarLinkItem} to={authRoutes.home}>
            Code
          </Link>
        </li>
        <li className={classes.navLinkContainer}>
          <Link className={classes.navbarLinkItem} to={authRoutes.home}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
