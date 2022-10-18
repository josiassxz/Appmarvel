import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import moviesReducer from '../Reducers/MoviesReducers';
import marvelReducers from '../Reducers/MarvelReducers';

const rootReducer = combineReducers({moviesReducer, marvelReducers});

export const store = createStore(rootReducer, applyMiddleware(thunk));
