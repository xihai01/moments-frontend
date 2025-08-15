import { screen, userEvent } from '@testing-library/react-native';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';

import { Provider as AuthProvider } from '../components/context/AuthContext';
import Main from '../index';
import AccountScreen from '../screens/AccountScreen';
import { renderWithRedux } from '../test-utils/redux-test-utils';
import { renderWithProviders } from '../test-utils/test-utils';

const handlers = [
  http.delete('https://casa-qa.herokuapp.com/api/v1/users/sign_out', () => {
    return HttpResponse.json({ message: 'Signed out successfully.' }, { status: 200 });
  }),
  http.post('https://casa-qa.herokuapp.com/api/v1/users/sign_in', () => {
    return HttpResponse.json(
      {
        id: 1,
        isSignedIn: true,
        api_token: 'aaaa',
        refresh_token: 'bbbb',
        user: {
          id: 1,
          display_name: 'Test User',
          email: 'test@test.com',
          refresh_token_expires_at: '2022-01-01T00:00:00.000Z',
          token_expires_at: '2022-01-01T00:00:00.000Z',
        },
      },
      { status: 201 }
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('AccountScreen', () => {
  it('renders the users display name, email, and one button', () => {
    renderWithProviders(<AccountScreen />);

    // Two Text elements for user display name and email should be rendered
    expect(screen.getByTestId('user:display_name')).toBeOnTheScreen();
    expect(screen.getByTestId('user:email')).toBeOnTheScreen();

    // One Button element for sign out should be rendered
    expect(screen.getByRole('button', { name: 'Sign out' })).toBeOnTheScreen();
  });

  it('navigates to the login screen when the sign out button is pressed', async () => {
    renderWithRedux(
      <AuthProvider>
        <Main />
      </AuthProvider>
    );

    const user = userEvent.setup();
    // Fill in the email and password fields
    await user.type(screen.getByPlaceholderText('Email'), 'ash');
    await user.type(screen.getByPlaceholderText('Password'), 'ketchum');
    // Press the sign in button
    await user.press(screen.getByRole('button', { name: 'Sign In' }));

    // check we are on the case contact list screen
    expect(await screen.findByText('MY CASES')).toBeOnTheScreen();

    // go to account screen
    await user.press(screen.getByRole('button', { name: 'Account' }));
    expect(await screen.findByText('Test User')).toBeOnTheScreen();
    expect(await screen.findByText('test@test.com')).toBeOnTheScreen();

    // return to login screen after signing out
    await user.press(screen.getByRole('button', { name: 'Sign out' }));
    expect(await screen.findByPlaceholderText('Email')).toBeOnTheScreen();
    expect(await screen.findByPlaceholderText('Password')).toBeOnTheScreen();
  });
});
