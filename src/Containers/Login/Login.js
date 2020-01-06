import React, { Component } from 'react';
import { fetchUser } from '../../utils/apiCalls';
import { NavLink } from 'react-router-dom';
import { getUser, hasError } from '../../actions';
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
        this.props.getUser(data);
        this.setState({ userFound: true })
      })
      .catch(err => {
        this.setState({ userFound: false });
        this.props.hasError('User not found');
      });
  }


  render() {
    const { user, error } = this.props;
    const { userFound } = this.state;
    console.log(userFound);
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
         <NavLink
           className='login_button'
           to='/'
           type='button'
           onClick={this.handleSubmit}
         >LOGIN</NavLink>
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

const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch( getUser(user)),
  hasError: error => dispatch( hasError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);