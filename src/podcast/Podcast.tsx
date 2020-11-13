import React, { useEffect, useState } from 'react';
import PodcastTable from './components/PodcastTable';
import Container from '@material-ui/core/Container';
import { Button, Drawer, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { PodcastData } from '../common/podcast';
import { State } from '../store/types';

const useStyles = makeStyles({
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
        <h1>Test</h1>
      </Drawer>
    </React.Fragment>
  );
};

export default Podcast;
