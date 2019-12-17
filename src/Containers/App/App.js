import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Login from '../Login/Login';

const App = () => {
  return (
    <main className="App">
      <Route exact path='/' component={MoviesContainer} />
      <Route exact path='/login' component={Login} />
    </main>
  );
}

export default App;
