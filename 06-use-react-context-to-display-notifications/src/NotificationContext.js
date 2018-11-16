import React from 'react';

const { Provider, Consumer } = React.createContext();

class NotificationProvider extends React.Component {
  state = {
    messages: []
  };

  addMessage = text => {
    this.setState(state => ({
      messages: [
        ...state.messages,
        {
          id: Math.random(),
          text,
          addedAt: new Date().getTime()
        }
      ]
    }));
  };

  removeMessage = message => {
    this.setState(state => ({
      messages: state.messages.filter(
        m => m.id !== message.id
      )
    }));
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          notify: this.addMessage
        }}
      >
        <div className="notification-wrapper">
          <ul>
            {this.state.messages.map(message => (
              <Notification
                key={message.id}
                message={message}
                onClose={() => this.removeMessage(message)}
              />
            ))}
          </ul>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

const Notification = ({ message, onClose }) => (
  <li>
    {message.text}
    <button className="close" onClick={onClose}>
      &times;
    </button>
  </li>
);

function withNotifier(Component) {
  return function Notified(props) {
    return (
      <Consumer>
        {({ notify }) => (
          <Component {...props} notify={notify} />
        )}
      </Consumer>
    );
  };
}

export {
  NotificationProvider,
  Consumer as Notifier,
  withNotifier
};
