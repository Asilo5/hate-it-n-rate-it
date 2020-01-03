import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { error } from './error';

const rootReducer = combineReducers({
  movies,
  user,
  error
});

export default rootReducer;