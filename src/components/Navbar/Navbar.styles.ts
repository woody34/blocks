import { createUseStyles } from 'react-jss';

export const useNavbarStyles = createUseStyles({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 2.5rem',
    position: 'absolute',
    zIndex: '1',
    width: '-webkit-fill-available',
  },

  navbarSticky: {
    background: '#f1f1f1',
    position: 'fixed',
    top: '0',
    left: '0',
    animation: '$moveDown 0.5s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 2.5rem',
    zIndex: '1',
    width: '-webkit-fill-available',
  },

  navbarLogoHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navbarLogo: {
    width: '2rem',
    height: '2rem',
    marginRight: '0.5rem',
    animation: '$rotate 0.7s ease-in-out 0.5s',
  },

  navbarLink: {
    display: 'flex',
    listStyle: 'none',
  },

  navbarLinkItem: {
    margin: '0.4rem 1rem 0 0',
    padding: '0 0.3rem',
    cursor: 'pointer',
    color: '#6a6a6a',
  },

  logoText: {
    color: '#6a6a6a',
  },

  '@keyframes moveDown': {
    from: { transform: 'translateY(-5rem)' },
    to: { transform: ' translateY(0rem)' },
  },

  '@keyframes rotate': {
    '0%': { transform: 'rotateY(360deg)' },
    '100%': { transform: 'rotateY(0rem)' },
  },
});
