import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapDispatchToProps } from './NavBar';
import { setUser } from '../../actions/index';


describe('NavBar', () => {
  let wrapper;
  let mockUser = {};
  const mockSetUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<NavBar user={mockUser} setUser={mockSetUser} />);
  });

  describe('snapshots', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapDispatchToProps', () => {
   it('calls dispatch with a setUser action', () => {
    mockUser = {
      name: 'John Adams',
      email: 'theREALJohnA@gmail,com',
      password: 'presidentsarechumps'
    }
    const mockDispatch = jest.fn();
    const actionToDispatch = setUser(mockUser);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setUser(mockUser);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
   })

  })
})