import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider } from './EmailContext';
import { NotificationProvider } from './NotificationContext';
import './index.css';

function Root() {
  return (
    <UserConsumer>
      {({ user }) => (user ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
}

ReactDOM.render(
  <NotificationProvider>
    <UserProvider>
      <EmailProvider>
        <Root />
      </EmailProvider>
    </UserProvider>
  </NotificationProvider>,
  document.querySelector('#root')
);
