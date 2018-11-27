import React from 'react';
import UserMenu from './UserMenu';
import { EmailConsumer } from './EmailContext';

const Header = () => (
  <EmailConsumer>
    {({ emails }) => (
      <header className="Header">
        <div>
          <h2>MyMail</h2>
          <div className="emails">
            {emails.length} emails
          </div>
        </div>
        <UserMenu />
      </header>
    )}
  </EmailConsumer>
);

export default Header;
