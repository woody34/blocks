import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store/types';


const Thing: React.FC = () => {
    const username = useSelector<State>(state => state.user.username);

    return (
        <>
            <h1>It Works! Loged in as {username}</h1>
        </>
    );
};

export default Thing;