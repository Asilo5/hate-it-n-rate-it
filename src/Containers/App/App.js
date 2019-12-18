import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { addMoviesData } from '../../actions/index';
import Login from '../Login/Login';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import Movie from '../Movie/Movie';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }

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
        <NavBar />
        <Route exact path='/' component={MoviesContainer} /> 
        <Route exact path='/login' component={Login} />
        <Route path='/movies:id' render={ ({ match }) => {
          const { id } = match.params;
          
          return movies.map((movie) => {
            const movieID = movies.find((otherMovie) => otherMovie.id === parseInt(id));
            return movieID && <Movie key={movie.id} {...movie} />;
          })
 
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
