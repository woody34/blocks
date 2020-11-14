import { Fab, TableCell } from '@material-ui/core';
import React, { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PodcastData } from '../../common/podcast';
import { BlocksTable, Headers } from '../../components/Table/Table';
import { State } from '../../store/types';
import { loadPodcasts, selectPodcast, setPodcastPlay } from '../store/actions';
import { cyPodcastTable, filterDuration, filterPublishDate } from './util';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { PodcastActions, PodcastState } from '../store/types';

export const headers: Headers<PodcastData>[] = [
  {
    label: '',
    value: 'prepend',
  },
  {
    value: 'number',
    label: 'Track',
    align: 'left',
    sortable: true,
  },
  {
    value: 'title',
    label: 'Title',
  },
  {
    value: 'description',
    label: 'Description',
  },
  {
    value: 'duration',
    label: 'Length',
    sortable: true,
    filter: filterDuration,
  },
  {
    value: 'published',
    label: 'Published',
    filter: filterPublishDate,
  },
];

const makePrepend =(dispatch: Dispatch<PodcastActions>, playing: boolean, selectedPodcast?: PodcastData) => {
  const prepend = (podcast: PodcastData) => {
    const currentlySelected = selectedPodcast?.number === podcast.number;
  
    const playPodcast = () => {
      dispatch(selectPodcast(podcast));
    };
  
    const pausePodcast = () => {
      dispatch(setPodcastPlay(false));
    };
  
    return (
      <TableCell key={Math.random()}>
        {currentlySelected && playing ? 
          <Fab onClick={pausePodcast} color="primary" data-cy={cyPodcastTable.pauseButton}>
            <PauseIcon />
          </Fab> :
          <Fab onClick={playPodcast} color="primary" data-cy={cyPodcastTable.playButton}>
            <PlayArrowIcon />
          </Fab>
        }
      </TableCell>
    );
  };
  return prepend;
};

const PodcastTable: React.FC = () => {
  const { selectedPodcast, playing, podcasts } = useSelector<State, PodcastState>(({ podcast }) => podcast);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPodcasts());
  }, []);
  
  return (
    <BlocksTable headers={headers} rows={podcasts} prepend={makePrepend(dispatch, playing, selectedPodcast)}/>
  );
};

export default PodcastTable;