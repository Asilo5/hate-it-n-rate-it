import React, { Component } from 'react';
import { fetchUser } from '../../utils/apiCalls';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../actions';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    fetchUser( email, password) 
      .then(data => this.props.getUser(data))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <section>
        <form>
          <input 
            name='email' 
            value={this.state.email} 
            onChange={(e) => this.handleChange(e)}
          />
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

const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch( getUser(user))
})

export default connect(null, mapDispatchToProps)(Login);