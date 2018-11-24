import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { UserContext } from '../UserContext';
import LoginPage from '../LoginPage';
import { login } from '../api';

jest.mock('../api');
let mockUser = { username: 'success' };

beforeEach(() => {
  login.mockImplementation(() => Promise.resolve(mockUser));
});

test('submit calls onLogin', done => {
  const onLogin = jest.fn();
  const { getByLabelText, getByText } = render(
    <UserContext.Provider value={{ onLogin }}>
      <LoginPage />
    </UserContext.Provider>
  );

  const username = getByLabelText('Username');
  const password = getByLabelText('Password');
  const button = getByText('Sign In');

  fireEvent.click(button);
  setTimeout(() => {
    expect(onLogin).toBeCalledWith(mockUser);
    done();
  }, 0);
});
