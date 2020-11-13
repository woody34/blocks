import React from 'react';
import PodcastTable from './components/PodcastTable';
import Container from '@material-ui/core/Container';
import {
  Drawer,
  Grid,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store/types';
import PodcastPlayer from './components/PodcastPlayer';
import PodcastDetails from './components/PodcastDetails';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import { PodcastState } from './store/types';
import { selectPodcast } from './store/actions';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {},
});

const Podcast: React.FC = () => {
  const { selectedPodcast } = useSelector<State, PodcastState>(({ podcast }) => podcast);

  const shouldShowPlayer = () => Boolean(selectedPodcast);

  const dispatch = useDispatch();

  const closePlayer = () => dispatch(selectPodcast(undefined));
  const { paper } = useStyles();

  return (
    <React.Fragment key={'bottom'}>
      <Container maxWidth="md">
        <PodcastTable />
      </Container>
      <Drawer
        anchor="bottom"
        open={shouldShowPlayer()}
        onClose={closePlayer}
        variant="persistent"
        color="success"
        classes={{ paper }}
      >
        <Grid container item xs={12}>
          <Grid item xs={6}>
            <PodcastDetails />
          </Grid>
          <Grid item xs={5}>
            <PodcastPlayer />
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="close" size="small" onClick={closePlayer}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </React.Fragment>
  );
};

export default Podcast;
