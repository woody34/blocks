import React from 'react';
import Logo from '../../assets/logo.svg';
import './Navbar.css';

interface INavbarProps {
  sticky: boolean;
}

export const Navbar: React.FC<INavbarProps> = (props: { sticky: boolean }) => {
  return (
    <nav className={props.sticky ? 'navbar navbar-sticky' : 'navbar'}>
      <div className="navbar--logo-holder">
        {props.sticky ? (
          <img src={Logo} alt="logo" className="navbar--logo" />
        ) : null}
        <h1> Stick Me</h1>
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item">Home</li>
        <li className="navbar--link-item">Podcast</li>
        <li className="navbar--link-item">Code</li>
        <li className="navbar--link-item">Contact us</li>
      </ul>
    </nav>
  );
};
