import { createUseStyles } from 'react-jss';

export const useHomeStyles = createUseStyles({
  App: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    height: 'auto',
    minHiehg: '1000px',
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

  contentContainer: {
    // backgroundColor: '#9cc8ff40',
    background: 'linear-gradient(#DBDBDC,#ffffff)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },

  contentStage: {
    background: 'linear-gradient(#DBDBDC,#ffffff)',
    // backgroundColor: 'white',
    margin: ' 0 16%',
    minHeight: '1500px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stubbedContent: {
    height: '200px',
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#34495e',
    margin: '25px 0px',
  },

  mediaBar: {
    position: 'absolute',
    top: '21%',
    left: '3.5%',
  },

  stickyMediaBar: {
    position: 'fixed',
    top: '30%',
    left: '3.5%',
  },

  subBox: {
    backgroundColor: '#fefefe',
    position: 'absolute',
    top: '21%',
    right: '0.5%',
    maxWidth: '15%',
    borderRadius: '3px',
  },

  stickySubBox: {
    backgroundColor: '#fefefe',
    position: 'fixed',
    top: '30%',
    right: '0.5%',
    maxWidth: '15%',
    borderRadius: '3px',
  },

  // MOBILE STYLES
  '@media (max-width: 540px)': {
    headerBackground: {
      height: '100vh',
      alignItems: 'center',
    },
    typography: {
      width: '75vw',
      top: '25%',
      bottom: 'unset',
    },
    techStack: {
      top: 'unset',
      width: '100%',
      bottom: '-37%',
      height: 'inherit',
      margin: 'auto',
      position: 'absolute',
      background: 'url(../assets/techStacks.png) no-repeat',
      backgroundSize: '100%',
      right: 'unset',
    },
    linkContainer: {
      right: 'unset',
    },
  },
});
