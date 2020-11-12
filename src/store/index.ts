 
import { combineReducers, createStore, ReducersMapObject } from 'redux';
import { userReducer } from './user/reducer';
import { Actions, State } from './types';

export const reducers: ReducersMapObject<State, Actions> = {
    user: userReducer,
};

export const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);