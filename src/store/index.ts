 
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer } from './user/reducer';
import thunk from 'redux-thunk';
import { podcastReducer } from '../podcast/store/reducer';
import { loadState, saveState } from '../util/localStorage';

export const reducers = {
  user: userReducer,
  podcast: podcastReducer,
};

export const rootReducer = combineReducers(reducers);

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));
store.subscribe(() => {
  saveState(store.getState());
});

export default {
  store
};