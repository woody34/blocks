import { IconButton, TableCell } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PodcastData } from '../../common/podcast';
import { BlocksTable } from '../../components/Table/Table';
import { State } from '../../store/types';
import { loadPodcasts, selectPodcast, setPodcastPlay } from '../store/actions';
import { PodcastState } from '../store/types';
import { cyPodcastTable, headers } from './util';
import { usePodcastTableStyles } from '../Podcast.styles';

const usePrepend = () => {
  const { selectedPodcast, playing } = useSelector<State, PodcastState>(({ podcast }) => podcast);
  const classes = usePodcastTableStyles();
  const dispatch = useDispatch();

  const prepend = (podcast: PodcastData) => {
    const currentlySelected = selectedPodcast?.number === podcast.number;

    const playPodcast = () => {
      dispatch(selectPodcast(podcast));
    };

    const pausePodcast = () => {
      dispatch(setPodcastPlay(false));
    };

    return (
      <TableCell key={Math.random() * Math.random()}>
        {currentlySelected && playing ? (
          <IconButton className={classes.root} onClick={pausePodcast} data-cy={cyPodcastTable.pauseButton}>
            <PauseIcon />
          </IconButton>
        ) : (
          <IconButton className={classes.root} onClick={playPodcast} data-cy={cyPodcastTable.playButton}>
            <PlayArrowIcon />
          </IconButton>
        )}
      </TableCell>
    );
  };
  return prepend;
};

const PodcastTable: React.FC = () => {
  const { podcasts } = useSelector<State, PodcastState>(({ podcast }) => podcast);
  const dispatch = useDispatch();
  const prepend = usePrepend();

  useEffect(() => {
    dispatch(loadPodcasts());
  });

  return <BlocksTable headers={headers} rows={podcasts} prepend={prepend} />;
};

export default PodcastTable;
