import React from 'react';
import UserContext from './UserContext';

class UserMenu extends React.Component {
  state = {
    menuVisible: false
  };

  avatarRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.hideMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideMenu);
  }

  hideMenu = e => {
    // Ignore clicks on the avatar
    // so that the menu can open
    if (e.target !== this.avatarRef.current) {
      this.setState({ menuVisible: false });
    }
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuVisible: !state.menuVisible
    }));
  };

  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div className="UserMenu">
            <img
              className="UserAvatar"
              alt="User avatar"
              src={user.avatar}
              onClick={this.toggleMenu}
              ref={this.avatarRef}
            />
            {this.state.menuVisible && (
              <ul>
                <li onClick={this.props.onLogout}>Logout</li>
              </ul>
            )}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default UserMenu;
