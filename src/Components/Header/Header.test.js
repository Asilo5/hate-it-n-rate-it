import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('header', () => {
  let wrapper;
  let mockUser = {};

  beforeEach(() => {
    wrapper = shallow(<Header user={mockUser} />)
  })

  describe('snapshots', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot without user', () => {
      wrapper = shallow(<Header user={{}} />);
      expect(wrapper).toMatchSnapshot();
    })
  })
})