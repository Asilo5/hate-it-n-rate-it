export const userRatings = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_RATINGS':
      return action.ratedMovies.ratings.map(movie => {
        return {
          id: movie.id,
          user_id: movie.user_id,
          movie_id: movie.movie_id,
          rating: movie.rating,
        }
      })
    default:
      return state;
  }
}