import React, { Component } from 'react';
import { fetchUser, fetchRatings } from '../../utils/apiCalls';
import { Redirect } from 'react-router-dom';
import { setUser, hasError, setUserRatings } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    fetchUser(email, password) 
      .then(data => {
        this.props.setUser(data);
        this.handleUserRatings(data.user.id);
        this.setState({ 
          userFound: true, 
          email: '',
          password: '' 
        });
      })
      .catch(() => {
        this.setState({ 
          userFound: false,
          email: '',
          password: '' 
        });
        this.props.hasError('Email or password are incorrect, please try again!');
      });
    }
    
    handleUserRatings = (userId) => {
    fetchRatings(userId)
      .then(data => this.props.setUserRatings(data))
  }

  render() {
    const { error } = this.props;
    const { userFound } = this.state;

    if (userFound) {
      return <Redirect to='/' />
    }

    return (
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
            <div>
              <button
                className='login_button'
                type='button'
                onClick={this.handleSubmit}
              >LOGIN</button>
            </div>
        </form>
      </section>
    )
  }
}

export const  mapStateToProps = ({ user, error }) => ({
  user,
  error 
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  setUser: user => dispatch(setUser(user)),
  hasError: error => dispatch(hasError(error)),
  setUserRatings: ratedMovies => dispatch(setUserRatings(ratedMovies))
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
