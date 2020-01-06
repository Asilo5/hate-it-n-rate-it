import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { userRatings } from './userRatings';
import { error } from './error';

const rootReducer = combineReducers({
  movies,
  user,
  userRatings,
  error
});

export default rootReducer;