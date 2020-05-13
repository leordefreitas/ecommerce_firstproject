import React from 'react';
import './styles.scss';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Simple Logo" />
        </div>
      </div>
    </header>
  )
}

export default Header;
