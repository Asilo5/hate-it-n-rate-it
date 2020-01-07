import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { addMoviesData } from '../../actions/index';
import Login from '../Login/Login';
import Header from '../../Components/Header/Header';
import Movie from '../Movie/Movie';


export class App extends Component {

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(data => this.props.addMoviesData(data))
  }

  render() {
    const { movies } = this.props;
    return (
      <main className="App">
        <Header />
        <Route exact path='/' component={MoviesContainer} /> 
        <Route exact path='/login' component={Login} />
        <Route path='/movies/:id' render={ ({ match }) => {
          const { id } = match.params;
          
          const foundFilm = movies.find((movie) => movie.id === parseInt(id));

          return <Movie {...foundFilm}/>
 
        }} />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMoviesData: movies => dispatch( addMoviesData(movies))
})

const mapStateToProps = ({ movies }) => ({
   movies
})

App.propTypes = {
  movies: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
