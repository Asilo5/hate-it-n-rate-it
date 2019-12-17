import React, { Component } from 'react';
import './App.scss';

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
        
      </main>
    );
  }
}

export default App;
