import React from 'react';
import { Movie, mapDispatchToProps } from './Movie';
import { shallow } from 'enzyme';
import { addMoviesData, setUserRatings } from '../../actions';
import * as mockData from '../../utils/mockData';

describe('Movie', () => {
  let wrapper;
  const mockRatings = [];
  const mockAverage = 4;
  
  beforeEach(() => {
    wrapper = shallow(<Movie userRatings={mockRatings} average_rating={mockAverage} />);
  })
  
  it('should match the snapshot', () => {
    wrapper = shallow(<Movie userRatings={mockRatings} average_rating={mockAverage} />);
    expect(wrapper).toMatchSnapshot();
  })

  describe('local state updates in handleChange', () => {
    it('should run handleChange when select is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          value: 3
        }
      };
  
      wrapper.find('select').simulate('change', mockEvent);
      expect(wrapper.instance().handleChange).toHaveBeenCalled();
  
    })

    it('should update state when handleChange is called', () => {
      const mockState = {
        rating: null
      };

      const expected = {
        rating: 3
      }

      wrapper.setState(mockState);
      wrapper.instance().handleChange('3');
  
      expect(wrapper.state()).toEqual(expected);
    })

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