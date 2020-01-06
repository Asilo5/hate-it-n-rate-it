import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { userRatings } from './userRatings';

const rootReducer = combineReducers({
  movies,
  user,
  userRatings
});

export default rootReducer;