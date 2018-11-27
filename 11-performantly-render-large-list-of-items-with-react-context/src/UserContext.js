import React from 'react';
import { FAKE_USER } from './api';

const { Provider, Consumer } = React.createContext();
// Context.Consumer, Context.Provider

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: FAKE_USER,
      onLogin: this.handleLogin,
      onLogout: this.handleLogout
    };
  }

  handleLogin = user => {
    this.setState({ user: user });
  };

  handleLogout = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };
