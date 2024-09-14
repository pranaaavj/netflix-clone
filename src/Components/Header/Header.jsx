import React from 'react';
import './Header.css';
import img from '../../images/netflix-logo.png';

const Header = () => {
  return (
    <div className='navbar-container'>
      <img className='nav-logo' src={img} alt='Neflix Logo' />
      <ul className='nav-items'>
        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
        <li>News & Popular</li>
        <li>My List</li>
      </ul>
      <img
        className='nav-avatar'
        src='https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg'
        alt='Neflix Avatar'
      />
    </div>
  );
};
export default Header;
