export const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES_DATA':
      return [...state, action.movies.movies];
    default:
      return state;
  }
}