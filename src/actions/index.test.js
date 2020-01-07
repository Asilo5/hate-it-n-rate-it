import * as actions from './index';
import * as mockData from '../utils/mockData';

describe('actions', () => {
  describe('addMoviesData', () => {
    it('should return an object containing type: "ADD_MOVIES_DATA" and the movies', () => {
      // setup
      const expected = {
        type: 'ADD_MOVIES_DATA',
        movies: mockData.mockMovies
      };
      // execution
      const result = actions.addMoviesData(mockData.mockMovies);
      // expectation
      expect(result).toEqual(expected);
    })
  })

  describe('setUser', () => {
    it('should return an object containing type: "SET_USER" and the user', () => {
      // setup
      const expected = {
        type: 'SET_USER',
        user: mockData.mockUser
      };
      // execution
      const result = actions.setUser(mockData.mockUser);
      // expectation
      expect(result).toEqual(expected);
    })
  })

  describe('setUserRatings', () => {
    it('should return an object containing type: "SET_USER_RATINGS" and the user', () => {
      const expected = {
        type: 'SET_USER_RATINGS',
        ratedMovies: mockData.mockRatedMovies
      }

      const result = actions.setUserRatings(mockData.mockRatedMovies);

      expect(result).toEqual(expected);
    })
  })

  describe('hasError', () => {
    it('should return an object containing type: "HAS_ERROR" and the user', () => {
      const expected = {
        type: 'HAS_ERROR',
        error: mockData.mockError
      }

      const result = actions.hasError(mockData.mockError);

      expect(result).toEqual(expected);
    })
  })
})