import React from 'react';
import { Movie } from './Movie';
import { shallow } from 'enzyme';

describe('Movie', () => {
  it('should match the snapshot', () => {
    const mockAverage = 4;
    const mockRatings = [];
    const wrapper = shallow(<Movie userRatings={mockRatings} average_rating={mockAverage} />);
    expect(wrapper).toMatchSnapshot();
  })
})