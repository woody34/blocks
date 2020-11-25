import { makeStyles } from '@material-ui/core';
import { createUseStyles } from 'react-jss';

export const usePodcastStyles = createUseStyles({
  podcastContainer: {
    marginTop: '88px',
  },

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

export const usePodcastDetailStyles = createUseStyles({
  grid: {
    background: 'transparent',
  },
});

export const usePodcastTableStyles = createUseStyles({
  root: {
    display: 'inline-block',
    background: 'transparent',
  },
  controls: {
    flexDirection: 'row',
    display: 'flex',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

export const usePodcastPlayerStyles = makeStyles({
  root: {
    display: 'inline-block',
    background: 'transparent',
  },
  controls: {
    flexDirection: 'row',
    display: 'flex',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});
