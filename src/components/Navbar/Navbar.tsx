import React from 'react';
import Logo from '../../assets/logo.svg';
import { ISickyProps } from '../../common/hooks/useSticky';
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
        <li className={classes.navbarLinkItem}>Home</li>
        <li className={classes.navbarLinkItem}>Podcast</li>
        <li className={classes.navbarLinkItem}>Code</li>
        <li className={classes.navbarLinkItem}>Contact us</li>
      </ul>
    </nav>
  );
};
