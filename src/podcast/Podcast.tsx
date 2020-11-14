import { Drawer, Grid, IconButton } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store/types';
import PodcastDetails from './components/PodcastDetails';
import PodcastPlayer from './components/PodcastPlayer';
import PodcastTable from './components/PodcastTable';
import { selectPodcast } from './store/actions';
import { PodcastState } from './store/types';

const Podcast: React.FC = () => {
  const { selectedPodcast } = useSelector<State, PodcastState>(
    ({ podcast }) => podcast
  );
  const shouldShowPlayer = () => Boolean(selectedPodcast);
  const dispatch = useDispatch();
  const closePlayer = () => dispatch(selectPodcast(undefined));
  const classes: ReturnType<typeof styles> = styles();

  return (
    <React.Fragment key={'bottom'}>
      <Container maxWidth="md">
        <PodcastTable />
      </Container>
      <Drawer
        className={classes.drawer}
        anchor="bottom"
        open={shouldShowPlayer()}
        onClose={closePlayer}
        variant="persistent"
        color="success"
      >
        <Grid className={classes.grid} container item xs={12}>
          <Grid item xs={6}>
            <PodcastDetails />
          </Grid>
          <Grid item xs={5}>
            <PodcastPlayer />
          </Grid>
          <Grid item xs={1} className={classes.closeContainer}>
            <IconButton
              className={classes.closeButton}
              aria-label="close"
              size="small"
              onClick={closePlayer}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
};

export default Podcast;
