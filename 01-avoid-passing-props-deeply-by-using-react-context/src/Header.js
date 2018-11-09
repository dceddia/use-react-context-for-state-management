import React from 'react';
import UserMenu from './UserMenu';

const Header = ({ onLogout }) => (
  <header className="Header">
    <h2>MyMail</h2>
    <UserMenu onLogout={onLogout} />
  </header>
);

export default Header;
