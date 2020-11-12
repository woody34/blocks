 
import { applyMiddleware, combineReducers, createStore, ReducersMapObject } from 'redux';
import { userReducer } from './user/reducer';
import { Actions, State } from './types';
import thunk from 'redux-thunk';

export const reducers: ReducersMapObject<State, Actions> = {
    user: userReducer,
};

export const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));