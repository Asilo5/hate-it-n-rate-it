export const fetchUser = async (email, password) => {
  const userInfo = {email, password};
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  const user = await response.json();
  return user;
}

export const fetchRatings = async () => {
  const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/users/5/ratings');
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  const movieRatings = await response.json();
  console.log(movieRatings);
  return movieRatings;
}