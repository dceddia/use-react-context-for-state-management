import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import UserContext from './UserContext';
import { FAKE_USER } from './api';
import './index.css';

class Root extends React.Component {
  state = {
    currentUser: FAKE_USER
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.currentUser,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout
        }}
      >
        {this.state.currentUser ? (
          <MainPage />
        ) : (
          <LoginPage onLogin={this.handleLogin} />
        )}
      </UserContext.Provider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
