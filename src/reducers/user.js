export const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.user.user;
    default:
      return state;
  }
}