import React from 'react';
import NavMainMenu from '../../features/NavMainMenu';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className='header-title'>Blog</div>
        <NavMainMenu />
      </div>
    </header>
  );
}

export default Header;