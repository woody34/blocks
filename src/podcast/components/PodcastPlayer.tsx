import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Slider,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core';
import React, { BaseSyntheticEvent, ChangeEvent, useState } from 'react';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { VolumeDown, VolumeUp } from '@material-ui/icons';
import { AnyIfEmpty, useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types';
import { setPodcastVolume } from '../store/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'inline-block',
    },
    controls: {
      flexDirection: 'row',
      display: 'flex',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

const PodcastPlayer: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const volume = useSelector<State, number>(state => state.podcast.volume);

  const changeVolume = (_: BaseSyntheticEvent, vol: number | number[]) => {
    dispatch(setPodcastVolume(vol));
  };

  return (
    <React.Fragment key={'bottom'}>
      <Card className={classes.root}>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </div>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={volume} onChange={changeVolume} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default PodcastPlayer;
