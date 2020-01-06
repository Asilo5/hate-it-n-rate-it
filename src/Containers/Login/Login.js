import React, { Component } from 'react';
import { fetchUser, fetchRatings } from '../../utils/apiCalls';
import { NavLink } from 'react-router-dom';
import { setUser, setUserRatings } from '../../actions';
import { connect } from 'react-redux';
import './Login.scss';

export class Login extends Component {
  constructor() {
    super();
    this.state = { 
      email: '',
      password: ''
    }
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    fetchUser( email, password ) 
      .then(data => this.props.setUser(data));
    this.handleUserRatings();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleUserRatings = () => {
    fetchRatings()
      .then(data => this.props.setUserRatings(data))
  }

  render() {
    return(
      <section>
        <form>
          <label>Email:</label>
          <input 
            name='email' 
            value={this.state.email} 
            onChange={(e) => this.handleChange(e)}
          />
          <label>Password:</label>
          <input 
            type='password'
            name='password' 
            value={this.state.password} 
            onChange={(e) => this.handleChange(e)}
          />
          <NavLink
            className='login_button'
            to='/'
            type='button'
            onClick={this.handleSubmit}
          >LOGIN </NavLink>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  setUserRatings: ratedMovies => dispatch(setUserRatings(ratedMovies))
})

// export const mapStatetoProps = state => ({
//   ratedMovies: state.ratedMovies
// })

export default connect(null, mapDispatchToProps)(Login);