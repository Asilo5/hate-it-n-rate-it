import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import { setUser, hasError, setUserRatings } from '../../actions';
import { fetchUser, fetchRatings } from '../../utils/apiCalls';

jest.mock('../../utils/apiCalls');


describe('Login', () => {
   
  let wrapper;
  let mockUser = {
    id: 1,
    name: 'Bob',
    email: 'bob@gmail.com',
    password: 34567
  };
  let mockError = 'No user found';
  let mockSetUser = {
    name: 'Bob',
    email: 'bob@gmail.com'
  };
  let mockHasError = mockError;
  let mocksetUserRatings = [1, 2, 2];

    beforeEach(() => {
      wrapper = shallow(<Login user={mockUser}
                                error={mockError}
                                setUser={mockSetUser}
                                hasError={mockHasError}
                                setUserRatings={mocksetUserRatings}/>);
      
    })


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
