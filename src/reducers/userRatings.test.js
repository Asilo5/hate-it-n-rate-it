import { userRatings } from './userRatings';

describe('user ratings reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = userRatings(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when SET_USER_RATINGS is passed in the action object', () => {
    const initialState = [];
    const action = {
      type: 'SET_USER_RATINGS',
      ratedMovies : {
        ratings: [{
          id: 510,
          user_id: 5,
          movie_id: 2,
          rating: 10,
        }]
      }
    }

    const result = userRatings(initialState, action);
    const expected = [
      {
        "id": 510,
        "movie_id": 2,
        "rating": 10,
        "user_id": 5
      }
    ]

    expect(result).toEqual(expected);
  })    
})