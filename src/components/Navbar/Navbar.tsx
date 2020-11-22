import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import useSticky from '../../common/hooks/useSticky';
import { authRoutes } from '../../routes';
import { useNavbarStyles } from './Navbar.styles';
import { useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const classes = useNavbarStyles();
  const location = useLocation();
  const { sticky, home, locationUpdate } = useSticky();

  useEffect(() => {
    locationUpdate();
  }, [location]);

  return (
    <nav
      className={
        sticky
          ? home
            ? classes.navbarStickyHome
            : classes.navbarSticky
          : classes.navbar
      }>
      <div className={classes.navbarLogoHolder}>
        {sticky ? (
          <img src={Logo} alt="logo" className={classes.navbarLogo} />
        ) : null}
        <h1 className={classes.logoText}> Software Blocks</h1>
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
          {' '}
          <Link className={classes.navbarLinkItem} to={authRoutes.home}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
