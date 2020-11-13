import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store/types';
import Button from '@material-ui/core/Button';
import PodcastActions from '../podcast/store/actions';
import { PodcastData } from '../common/podcast';

const Thing: React.FC = () => {
  const username = useSelector<State, string>((state) => state.user.username);
  const dispatch = useDispatch();
  const podcasts = useSelector<State, PodcastData[]>((state) => state.podcast.podcasts);
  const filterPublishDate = () => {
    dispatch(PodcastActions.loadPodcasts());
    console.log(podcasts);
  };
  const [input, setInput] = useState('');

  const onLocalStateInputChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(currentTarget.value);
  };

  return (
    <>
      <h1>useSelector, username: {username}</h1>
      <Button onClick={filterPublishDate} variant="contained" color="primary">
        Set username state
      </Button>
      <h1>useState, local state example: {input}</h1>
      <input onChange={onLocalStateInputChange}></input>
    </>
  );
};

export default Thing;
