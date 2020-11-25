import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { podcastReducer } from '../podcast/store/reducer';
import { loadState, saveState } from '../util/localStorage';
import { appReducer } from './app/reducer';

export const reducers = {
  podcast: podcastReducer,
  app: appReducer,
};

export const rootReducer = combineReducers(reducers);

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk),
);
store.subscribe(() => {
  saveState(store.getState());
});

export default {
  store,
};
