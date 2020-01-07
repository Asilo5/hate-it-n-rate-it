import React from 'react';
import { Movie, mapDispatchToProps } from './Movie';
import { shallow } from 'enzyme';
import { addMoviesData, setUserRatings } from '../../actions';
import * as mockData from '../../utils/mockData';

describe('Movie', () => {
  it('should match the snapshot', () => {
    const mockAverage = 4;
    const mockRatings = [];
    const wrapper = shallow(<Movie userRatings={mockRatings} average_rating={mockAverage} />);
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a addMoviesData action', () => {
     const mockDispatch = jest.fn();
     const actionToDispatch = addMoviesData(mockData.mockMovies);
     const mappedProps = mapDispatchToProps(mockDispatch);
 
     mappedProps.addMoviesData(mockData.mockMovies);
 
     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a setUserRatings action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setUserRatings(mockData.mockRatedMovies);
      const mappedProps = mapDispatchToProps(mockDispatch);
  
      mappedProps.setUserRatings(mockData.mockRatedMovies);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
     })
 
  })

})