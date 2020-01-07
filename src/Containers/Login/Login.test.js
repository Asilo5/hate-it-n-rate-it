import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import { setUser, hasError, setUserRatings } from '../../actions';
import { fetchUser, fetchRatings } from '../../utils/apiCalls';

jest.mock('../../utils/apiCalls');

describe('Login', () => {
   
  let wrapper;
  let mockUser = {
    user: {
      id: 1,
      name: 'Bob',
      email: 'bob@gmail.com',
      password: '34567'
    }
  };
  let mockError = 'No user found';
  let mockSetUser = jest.fn();
  let mockHasError = mockError;
  let mockSetUserRatings = [1, 2, 2];

    beforeEach(() => {
      wrapper = shallow(<Login user={mockUser}
                                error={mockError}
                                setUser={mockSetUser}
                                hasError={jest.fn()}
                                setUserRatings={jest.fn()}/>);
      
      fetchUser.mockImplementation(() => {
        return Promise.resolve(mockUser);
      });
      
      fetchRatings.mockImplementation(() => {
        return Promise.resolve(mockSetUserRatings);
      }); 
    })


  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleChange when input changes', () => {
    wrapper.instance().handleChange = jest.fn();
    const mockEvent = {
       target: {
         name: 'email',
         value: 'bob@gmail.com'
       }
    };

    wrapper.find('input').at(0).simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  })

  it('should call handleChange when input changes', () => {
    wrapper.instance().handleChange = jest.fn();
    const mockEvent = {
       target: {
         name: 'password',
         value: '3456756'
       }
    };

    wrapper.find('input').at(1).simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  })

  it('should call fetchUser when handleSubmit is called', async () => { 
    await wrapper.instance().handleSubmit();
    expect(fetchUser).toHaveBeenCalled();
  })

  it('should update userFound state when handleSubmit is called', async () => {
  
    expect(wrapper.state('userFound')).toEqual(false);

    await wrapper.instance().handleSubmit();

    expect(wrapper.state('userFound')).toEqual(true);
  })

  it('should update email state when handleSubmit is called', async () => {
    wrapper.setState({
      email: 'bob@gmail.com'
    });

    await wrapper.instance().handleSubmit();

    expect(wrapper.state('email')).toEqual('');
  })

  it('should update password state when handleSubmit is called', async () => {
    wrapper.setState({
      password: '34567'
    });

    await wrapper.instance().handleSubmit();

    expect(wrapper.state('password')).toEqual('');
  })


})
