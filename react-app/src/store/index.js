import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import decksReducer from './decks';
import studyDecksReducer from './decks_studying';
import cardsReducer from './cards';
import tagsReducer from './tags';
import searchReducer from './search';

const rootReducer = combineReducers({
  session,
  decks: decksReducer,
  studyDecks: studyDecksReducer,
  cards: cardsReducer,
  tags: tagsReducer,
  search: searchReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
