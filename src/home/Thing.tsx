import { randomBytes } from 'crypto';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../store/types';
import { login } from '../store/user/actions';
import Button from '@material-ui/core/Button'; 


const Thing: React.FC = () => {
    const username = useSelector<State, string>(state => state.user.username);
    const dispatch = useDispatch();
    const testLogin = (): unknown => dispatch(login({ username: randomBytes(10).toString() }));
    const [input, setInput] = useState('');

    const onLocalStateInputChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
        setInput(currentTarget.value);
    };

    return (
        <>
            <h1>useSelector, username: {username}</h1>
            <Button onClick={testLogin} variant="contained" color="primary">Set username state</Button>
            <h1>useState, local state example: {input}</h1>
            <input onChange={onLocalStateInputChange} ></input>
        </>
    );
};

export default Thing;