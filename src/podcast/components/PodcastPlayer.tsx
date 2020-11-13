import {
  Card,
  CardContent,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Slider,
  Theme,
} from '@material-ui/core';
import React, { BaseSyntheticEvent } from 'react';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { VolumeDown, VolumeUp } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/types';
import {
  selectPodCastByNumber,
  setPodcastPlay,
  setPodcastVolume,
} from '../store/actions';
import { PodcastState } from '../store/types';
import PauseIcon from '@material-ui/icons/Pause';

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

  const {
    volume,
    selectedPodcast,
    playing,
    podcasts
  } = useSelector<State, PodcastState>((state) => state.podcast);

  const changeVolume = (_: BaseSyntheticEvent, vol: number | number[]) => {
    dispatch(setPodcastVolume(vol));
  };

  const nextTrack = () => {
    const number = selectedPodcast ? selectedPodcast.number + 1 : 0;
    dispatch(selectPodCastByNumber(number));
  };

  const togglePlay = () => {
    dispatch(setPodcastPlay(!playing));
  };

  const previousTrack = () => {
    const number = selectedPodcast ? selectedPodcast.number - 1 : 0;
    dispatch(selectPodCastByNumber(number));
  };

  const shouldDisablePrevious = () => {
    const number = (selectedPodcast?.number ?? 0) - 1;
    const exists = Boolean(podcasts[number]);
    return !exists;
  };
  
  const shouldDisablePlay = () => !selectedPodcast;

  const shouldDisableNext = () => {
    const number = (selectedPodcast?.number ?? 0) + 1;
    const exists = Boolean(podcasts[number]);
    return !exists;
  };

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.controls}>
        <IconButton
          aria-label="previous"
          onClick={previousTrack}
          disabled={shouldDisablePrevious()}
        >
          <SkipPreviousIcon />
        </IconButton>
        {playing ? 
          <IconButton aria-label="play/pause" onClick={togglePlay} disabled={shouldDisablePlay()}>
            <PauseIcon className={classes.playIcon} />
          </IconButton> :
          <IconButton aria-label="play/pause" onClick={togglePlay} disabled={shouldDisablePlay()}>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        }
        <IconButton
          aria-label="next"
          onClick={nextTrack}
          disabled={shouldDisableNext()}
        >
          <SkipNextIcon />
        </IconButton>
      </CardContent>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={volume}
            onChange={changeVolume}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </Card>
  );
};

export default PodcastPlayer;
