import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import './index.css';

function Root() {
  return (
    <UserConsumer>
      {({ user }) =>
        user ? (
          <MainPage />
        ) : (
          <LoginPage onLogin={this.handleLogin} />
        )
      }
    </UserConsumer>
  );
}

ReactDOM.render(
  <UserProvider>
    <Root />
  </UserProvider>,
  document.querySelector('#root')
);
