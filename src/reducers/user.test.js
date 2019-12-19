import { user } from './user';

describe('iuser reducer', () => {
  it('should return the initial state', () => {
    // setup
    const expected = {}
    // execution
    const result = user(undefined, {})
    // assertion
    expect(result).toEqual(expected);
  })

  it('should return the correct state when yuou pass in GET_USER for type of the action object', () => {
    // setup
    const initialState = {};
    const action = {
      type: 'GET_USER',
      user: {
        user: {
          id: 1, 
          name: "Alan", 
          email: "alan@turing.io"
        }
      }
    }
    // execution
    const result = user(initialState, action);
    const expected = {
      id: 1, 
      name: "Alan", 
      email: "alan@turing.io"
    }
    // assertion
    expect(result).toEqual(expected);
  })
})