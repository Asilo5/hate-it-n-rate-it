import React, { Component } from 'react';
import { fetchUser } from '../../utils/apiCalls';
import { NavLink } from 'react-router-dom';
import { setUser, hasError } from '../../actions';
import { connect } from 'react-redux';
import './Login.scss';

export class Login extends Component {
  constructor() {
    super();
    this.state = { 
      email: '',
      password: '',
      userFound: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    fetchUser( email, password) 
      .then(data => {
        this.props.setUser(data);
        this.setState({ userFound: true })
      })
      .catch(err => {
        this.setState({ userFound: false });
        this.props.hasError('Email or password are incorrect, please try again!');
      });

    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { user, error } = this.props;
    const { userFound } = this.state;
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
          <p className='error'>{error}</p>
          { userFound ?
          <div>
              <p className='welcome-msg'>You're now logged in, {user.name}!</p>  
              <NavLink
                className='login_button'
                to='/'
                type='button'
                onClick={this.handleSubmit}
              >LOGIN</NavLink>
          </div>
         :
         <NavLink
         className='login_button'
         to='/login'
         type='button'
         onClick={this.handleSubmit}
       >LOGIN </NavLink>
        }
        </form>
      </section>
    )
  }
}

const  mapStateToProps = ({ user, error }) => ({
  user,
  error 
})

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch( setUser(user)),
  hasError: error => dispatch( hasError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);