import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { ISickyProps } from '../../common/hooks/useSticky';
import { authRoutes } from '../../routes';
import { useNavbarStyles } from './Navbar.styles';

export const Navbar: React.FC<ISickyProps> = (props: { sticky: boolean }) => {
  const classes = useNavbarStyles();

  return (
    <nav className={props.sticky ? classes.navbarSticky : classes.navbar}>
      <div className={classes.navbarLogoHolder}>
        {props.sticky ? (
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
