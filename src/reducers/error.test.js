import { error } from './error';

describe('error reducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = error(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when HAS_ERROR is passed in the action object', () => {
    const initialState = '';
    const action = {
      type: 'HAS_ERROR',
      error : 'This is a test error!'
    }

    const result = error(initialState, action);
    const expected = "This is a test error!";

    expect(result).toEqual(expected);
  })    
})