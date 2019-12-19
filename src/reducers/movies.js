export const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES_DATA':
      return action.movies.movies.map(movie => {
        return {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          backdrop_path: movie.backdrop_path,
          release_date: movie.release_date,
          overview: movie.overview,
          average_rating: movie.average_rating,
          user_rating: movie.user_rating
        }
      })
    default:
      return state;
  }
}