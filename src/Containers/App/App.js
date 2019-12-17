import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import MoviesContainer from '../MoviesContainer/MoviesContainer';

const App = () => {
  return (
    <main className="App">
      <Route exact path='/' component={MoviesContainer} />
    </main>
  );
}

export default App;
