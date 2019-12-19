import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.scss'

export const NavBar = ({ user}) => {
  return (
    <div className='NavBar'>
      {!user.name ?
      <NavLink className='nav_button' to='/login'> Sign In </NavLink> : 
      <button className='nav_button' onClick={() => window.location.reload()}> Sign Out </button>
      }
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(NavBar); 