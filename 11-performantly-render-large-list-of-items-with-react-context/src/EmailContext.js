import React from 'react';
import { fetchEmails, fetchLatestEmails } from './api';
import { withNotifier } from './NotificationContext';

const { Provider, Consumer } = React.createContext();

class EmailProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      currentEmail: null,
      error: null,
      loading: false,
      onSelectEmail: this.handleSelectEmail
    };
  }

  componentDidMount() {
    this.setState({ loading: true, error: null });
    fetchEmails()
      .then(emails =>
        this.setState({ loading: false, emails })
      )
      .catch(error =>
        this.setState({ loading: false, error })
      );
    this.refreshInterval = setInterval(this.refresh, 2000);
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
          // notify!
          this.props.notify(
            `${emails.length} more emails arrived`
          );
        }
      });
    }
  };

  handleSelectEmail = email => {
    this.setState({ currentEmail: email });
  };

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

const Wrapped = withNotifier(EmailProvider);

export {
  Wrapped as EmailProvider,
  Consumer as EmailConsumer
};
