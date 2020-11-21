import { createUseStyles } from 'react-jss';

export const useHomeStyles = createUseStyles({
  App: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    height: '500rem',
    overflow: 'hidden',
  },

  headerBackground: {
    background: 'linear-gradient(#ffffff, #DBDBDC)',
    backgroundSize: '46rem',
    height: '50rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },

  infoContainer: {
    bottom: '0px',
    position: 'absolute',
    left: '10%',
    top: '31%',
    height: 'fit-content',
    background: 'transparent',
  },

  typography: {
    background: 'url("../assets/blocksTypography.svg") no-repeat',
    backgroundSize: '100%',
    width: '47vw',
    maxWidth: '750px',
    height: '114px',
    position: 'absolute',
    margin: 'auto',
    bottom: '75px',
    top: '0px',
    left: '50px',
  },

  techStack: {
    background: 'url(../assets/techStacks.png)  no-repeat',
    backgroundSize: '100%',
    width: '47vw',
    maxWidth: '750px',
    height: 'inherit',
    margin: 'auto',
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    top: '24%',
  },

  linkContainer: {
    position: 'absolute',
    top: '0',
    right: '0',
    listStyle: 'none',
    display: 'flex',
  },

  navLinkContainer: {
    margin: '0.4rem 1rem 0 0',
    padding: '0 0.3rem',
  },

  navLink: {
    textDecoration: 'unset',
    outline: 'unset',
    color: '#b9b9b9 !important',
    cursor: 'pointer !imporant',
  },
});
