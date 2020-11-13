import { Button, TableCell } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { PodcastData } from '../../common/podcast';
import { BlocksTable, Headers } from '../../components/Table/Table';
import { State } from '../../store/types';
import moment from 'moment';

export const headers: Headers<PodcastData>[] = [
  {
    label: 'Action',
    hide: true,
  },
  {
    value: 'number',
    label: 'Number',
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
    filter: (item: PodcastData): string => new Date(item.duration * 1000).toISOString().substr(11, 8),
  },
  {
    value: 'published',
    label: 'Published On',
    filter: (item: PodcastData): string => moment(item.published).format('MMM. Do, YYYY'),
  },
];

const prepend = (data: PodcastData) => (
  <TableCell>
    <Button onClick={() => console.log(data)} variant="contained" color="primary">
        Play
    </Button>
  </TableCell>);

const PodcastTable: React.FC = () => {
  const rows = useSelector<State, PodcastData[]>((state) => state.podcast.podcasts);
  return (
    <BlocksTable headers={headers} rows={rows} prepend={prepend} dense/>
  );
};
  
export default PodcastTable;