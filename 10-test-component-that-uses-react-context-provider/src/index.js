import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider } from './EmailContext';
import './index.css';

function Root() {
  const s = useState(7);
  console.log(s);
  return (
    <UserConsumer>
      {({ user }) => (user ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
}

ReactDOM.render(
  <UserProvider>
    <EmailProvider>
      <Root />
    </EmailProvider>
  </UserProvider>,
  document.querySelector('#root')
);
