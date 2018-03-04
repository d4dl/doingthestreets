import { applyMiddleware, combineReducers, createStore } from 'redux';
import { effectsMiddleware } from 'redux-effex';

import CurrentUserReducer from './CurrentUserReducer';
import OutfitsReducer from './OutfitsReducer';
import Effects from '../effects';

export default createStore(
  combineReducers({
    currentUser: CurrentUserReducer,
    outfits: OutfitsReducer,
  }),
  applyMiddleware(effectsMiddleware(Effects))
);
