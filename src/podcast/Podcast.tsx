import React from 'react';
import PodcastTable from './components/PodcastTable';
import Container from '@material-ui/core/Container';

const Podcast: React.FC = () => {
  return (
    <Container maxWidth="md">
      <PodcastTable />
    </Container>
  );
};
  
export default Podcast;