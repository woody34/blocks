import {
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store/types';
import { PodcastState } from '../store/types';

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

const PodcastDetails: React.FC = () => {
  const classes = useStyles();

  const { selectedPodcast } = useSelector<State, PodcastState>(state => state.podcast);

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography gutterBottom variant="body1" component="h2">
          {selectedPodcast?.title || ''}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {selectedPodcast?.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastDetails;
