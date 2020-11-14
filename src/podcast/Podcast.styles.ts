import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  grid: {
    background: 'rgb(244 244 244)',
  },
  drawer: {
    '& > *': {
      border: 'unset !important',
    },
  },
  closeContainer: {
    position: 'relative',
  },
  closeButton: {
    position: 'absolute !important',
    right: 10,
    top: 10,
  },
});

export const detailsStyles = createUseStyles({
  grid: {
    background: 'transparent',
  },
});
