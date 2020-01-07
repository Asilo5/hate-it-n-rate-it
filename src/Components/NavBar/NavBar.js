import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../actions/index';
import './NavBar.scss'

export const NavBar = ({ user, setUser }) => {

  const logOut = () => {
    setUser({
      user: {}
    })
  }

  return (
    <div className='NavBar'> 
      {!user.name ?
        <NavLink className='nav_button' to='/login'> Sign In </NavLink> 
      : <NavLink className='nav_button' onClick={logOut} to='/'> Log Out </NavLink>
      }
      <NavLink className='home_button' to='/'> Home </NavLink>
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

NavBar.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 