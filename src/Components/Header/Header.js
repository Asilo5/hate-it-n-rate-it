import React from 'react';
import './Header.scss'
import { connect } from 'react-redux';

const Header = ({ user }) => {
  console.log(user)
  return (
    <div className='header'>
    <h1><span>Hate</span> It 'N <span>Rate</span> It</h1>
    {!user.name ? null : <p>Welcome <span>{user.name}</span></p>
    }
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);  