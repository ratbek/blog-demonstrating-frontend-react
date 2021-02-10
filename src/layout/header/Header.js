import React from 'react';
import { Link } from 'react-router-dom';
import NavMainMenu from '../../features/NavMainMenu';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className='header-title'><Link to="/">Blog</Link></div>
        <NavMainMenu />
      </div>
    </header>
  );
}

export default Header;