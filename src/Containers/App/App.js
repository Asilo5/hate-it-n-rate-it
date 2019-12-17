import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
// import Login from '../Login/Login';


class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(data => console.log(data.movies))
  }

  render() {
    return (
      <main className="App">
        <Route exact path='/' component={MoviesContainer} /> 
        {/* <Route exact path='/login' component={Login} /> */}
      </main>
    );
  }
}

export default App;
