import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';

export const Header = ({ user }) => {
  return (
    <header> 
      <div>
      <h1>Hate It 'N Rate It</h1>
        <div>
          {!user.name ? null : <p>Welcome {user.name}!</p>}
          <NavBar />
        </div>
      </div>
      <img src='http://www.thecareeravenue.com/Images/extras/spacer.png' alt='pattern decoration' />
   </header>
  )
}

 export const mapStateToProps = state => ({
  user: state.user
});

Header.propTypes = {
  user: PropTypes.object
}

export default connect(mapStateToProps)(Header);  