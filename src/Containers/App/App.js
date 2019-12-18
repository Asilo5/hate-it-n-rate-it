import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { addMoviesData } from '../../actions/index';
import Login from '../Login/Login';


class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(data => this.props.addMoviesData(data))
  }

  render() {
    return (
      <main className="App">
        <Route exact path='/' component={MoviesContainer} /> 
        <Route exact path='/login' component={Login} />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMoviesData: movies => dispatch( addMoviesData(movies))
})


export default connect(null, mapDispatchToProps)(App);
