import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import MessageViewer from './MessageViewer';
import { EmailConsumer } from './EmailContext';

const MainPage = () => (
  <EmailConsumer>
    {({ currentEmail }) => (
      <main>
        <Header />
        {currentEmail ? <MessageViewer /> : <MessageList />}
      </main>
    )}
  </EmailConsumer>
);

export default MainPage;
