import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { addMoviesData } from '../../actions/index';
import Login from '../Login/Login';
import Header from '../../Components/Header/Header';
import Movie from '../Movie/Movie';
import { getMovies } from '../../utils/apiCalls';
import { bindActionCreators } from 'redux';


export class App extends Component {

  componentDidMount() {
    getMovies()
      .then(data => this.props.addMoviesData(data))
      .catch(err => console.log(err))
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

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
  addMoviesData: movies => dispatch( addMoviesData(movies))
  }, dispatch)
)

export const mapStateToProps = ({ movies }) => ({
   movies
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
