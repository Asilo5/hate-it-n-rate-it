import React from 'react';
import { shallow } from 'enzyme';
import { setUser, hasError, setUserRatings } from '../../actions';
import { fetchUser, fetchRatings } from '../../utils/apiCalls';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';

jest.mock('../../utils/apiCalls');

describe('Login Component', () => {

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
  
    it('should call fetchRatings when handleUserRatings is called', async () => { 
      await wrapper.instance().handleSubmit();
      expect(fetchRatings).toHaveBeenCalledWith(1);
    })
  
  })

  describe('mapStateToProps', () => {
    it('should return an object with users info', () => {
      const mockState = {
       user: {
        id: 1,
        name: 'Bob',
        email: 'bob@gmail.com',
        password: '34567'
       },
       error: 'Error'
      };

      const expected = {
        user: {
          id: 1,
          name: 'Bob',
          email: 'bob@gmail.com',
          password: '34567'
        },
        error: 'Error'
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);

    })
  })

  describe('mapDispatchToProps', () => {
    let mockUser = {
      id: 1,
      name: 'Bob',
      email: 'bob@gmail.com',
      password: '34567'
     };

     let mockHasError = 'Error';

     let mockRatedMovies = [
       {
         id: 1,
        user_id: 3223,
        movie_id: 43434,
        rating: 4,
      }
     ];

     const mockDispatch = jest.fn();

     it('should dispatch setUser when handleSubmit', () => {
       const actionToDispatch = setUser(mockUser);
       const mappedProps = mapDispatchToProps(mockDispatch);

       mappedProps.setUser(mockUser);
       expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
     })

     it('should dispatch hasError when handleSubmit', () => {
      const actionToDispatch = hasError(mockHasError);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.hasError(mockHasError);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should dispatch setUserRatings when handleUserRatings', () => {
      const actionToDispatch = setUserRatings(mockRatedMovies);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setUserRatings(mockRatedMovies);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })

  })
})
