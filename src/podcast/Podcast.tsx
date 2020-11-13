import React, { useEffect, useState } from 'react';
import PodcastTable from './components/PodcastTable';
import Container from '@material-ui/core/Container';
import { Button, Drawer, Grid, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { PodcastData } from '../common/podcast';
import { State } from '../store/types';
import PodcastPlayer from './components/PodcastPlayer';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    background: 'green',
    color: 'red'
  }
});

const Podcast: React.FC = () => {
  const selectedPodcast = useSelector<State, PodcastData | undefined>(
    (state) => state.podcast.selectedPodcast
  );
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(Boolean(selectedPodcast));
  }, [selectedPodcast]);

  const togglePlayer = () => setShowPlayer(!showPlayer);
  const { paper } = useStyles();

  return (
    <React.Fragment key={'bottom'}>
      <Container maxWidth="md">
        <PodcastTable />
      </Container>
      <Button onClick={togglePlayer}>Show Player</Button>
      <Drawer
        anchor="bottom"
        open={showPlayer}
        onClose={togglePlayer}
        variant="persistent"
        color="success"
        classes={{ paper }}
      >
        <Grid container item xs={12} justify="space-between">
          <Grid item xs={4}>
            <PodcastPlayer></PodcastPlayer>
          </Grid>
          <Grid item xs={4}>
            <PodcastPlayer></PodcastPlayer>
          </Grid>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
};

export default Podcast;
