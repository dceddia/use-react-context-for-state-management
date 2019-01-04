import React from 'react';
import { fetchEmails, fetchLatestEmails } from './api';

const { Provider, Consumer } = React.createContext();

class EmailProvider extends React.Component {
  state = {
    emails: [],
    currentEmail: null,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true, error: null });
    fetchEmails()
      .then(emails =>
        this.setState({ loading: false, emails })
      )
      .catch(error =>
        this.setState({ loading: false, error })
      );
    this.refreshInterval = setInterval(this.refresh, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval);
  }

  refresh = () => {
    if (!this.state.loading) {
      fetchLatestEmails().then(emails => {
        if (emails.length > 0) {
          this.setState(state => ({
            emails: state.emails.concat(emails)
          }));
        }
      });
    }
  };

  handleSelectEmail = email => {
    this.setState({ currentEmail: email });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          onSelectEmail: this.handleSelectEmail
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { EmailProvider, Consumer as EmailConsumer };
