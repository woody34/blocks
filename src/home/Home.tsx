import React from 'react';
import { Link } from 'react-router-dom';
import { authRoutes } from '../routes';

const Home: React.FC = () => {
  return (
    <>
      <Link to={authRoutes.podcast} data-cy={authRoutes.podcast}>
        Podcast
      </Link>
    </>
  );
};

export default Home;
