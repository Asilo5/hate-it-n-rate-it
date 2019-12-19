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

  describe('getUser', () => {
    it('should return an object containing type: "GET_USER" and the user', () => {
      // setup
      const expected = {
        type: 'GET_USER',
        user: mockData.mockUser
      };
      // execution
      const result = actions.getUser(mockData.mockUser);
      // expectation
      expect(result).toEqual(expected);
    })
  })
})