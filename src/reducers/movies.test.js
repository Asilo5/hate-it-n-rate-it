import { movies } from './movies';

describe('movies reducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = movies(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when ADD_MOVIES DATA is passed in the action object', () => {
    // setup
    const initialState = [];
    const action = {
      type: 'ADD_MOVIES_DATA',
      movies : {
        movies: [{
        "id": 2,
        "title": "Ad Astra",
        "poster_path": "posrt path 2",
        "backdrop_path": "backdrop path 2",
        "release_date": "2019-09-17",
        "overview": "overview 2",
        "average_rating": 7
      }]
    }
  }
  
    // execution
    const result = movies(initialState, action);
    const expected = [
      {
        "id": 2,
        "title": "Ad Astra",
        "poster_path": "posrt path 2",
        "backdrop_path": "backdrop path 2",
        "release_date": "2019-09-17",
        "overview": "overview 2",
        "average_rating": 7
      }
    ]

    // assertion
    expect(result).toEqual(expected);

  })
})