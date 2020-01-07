export const fetchUser = async (email, password) => {
  const userInfo = {email, password};

  const options = { 
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {'Content-Type': 'application/json'}
  };

  const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  };

  const user = await response.json();

  return user;
}

export const fetchRatings = async (userId) => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  };

  const movieRatings = await response.json();

  return movieRatings;
}

export const addRatings = async (id, rating, userId) => {
  const movieRating = { 
    movie_id: id, 
    rating: rating
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(movieRating),
    headers: {'Content-Type': 'application/json'}
  };

  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`, options);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  };

  const newMovieRatings = await response.json();
  return newMovieRatings;
}

export const getMovies = async () => {
  const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies');

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  };

  const movies = await response.json();
  console.log(movies);
  return movies;
}