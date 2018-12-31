import React from 'react';
import Header from './Header';
import MessageList from './MessageList';

const MainPage = ({ currentUser, onLogout }) => (
  <main>
    <Header currentUser={currentUser} onLogout={onLogout} />
    <MessageList currentUser={currentUser} />
  </main>
);

export default MainPage;
