export const addMoviesData = movies => ({
  type: 'ADD_MOVIES_DATA',
  movies
})

export const setUser = user => ({
  type: 'SET_USER',
  user
})

export const hasError = (error) => ({
  type: 'HAS_ERROR',
  error
})

