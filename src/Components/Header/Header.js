import React from 'react';
import './Header.scss';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';

const Header = ({ user }) => {
  console.log(user)
  return (
    <header className='header'>
      <h1><span>Hate</span> It 'N <span>Rate</span> It</h1>
      {!user.name ? null : <p>Welcome <span>{user.name}</span></p>}
      <NavBar />
   </header>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);  