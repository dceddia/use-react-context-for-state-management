import React from 'react';
import { EmailConsumer } from './EmailContext';

const MessageViewer = () => (
  <EmailConsumer>
    {({ currentEmail, onSelectEmail }) => (
      <div className="MessageViewer">
        <button onClick={() => onSelectEmail(null)}>
          Back
        </button>
        <h2>{currentEmail.subject}</h2>
        <div>{currentEmail.body}</div>
      </div>
    )}
  </EmailConsumer>
);

export default MessageViewer;
