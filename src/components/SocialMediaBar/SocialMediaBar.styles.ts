import { createUseStyles } from 'react-jss';

export const useMediaButtonStyles = createUseStyles({
  button: {
    backgroundColor: 'Red',
    '& svg': {
      fontSize: 50,
    },
  },
});

export const useMediaBarStyles = createUseStyles({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});
