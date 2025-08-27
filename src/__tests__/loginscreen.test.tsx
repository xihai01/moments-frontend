import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LoginScreen from '../screens/login/LoginScreen';
import PhoneNumberScreen from '../screens/login/PhoneNumberScreen';

describe('Registration and Login', () => {
  it('renders the registration screen', () => {
    const mockNavigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
      replace: jest.fn(),
      push: jest.fn(),
      pop: jest.fn(),
      popToTop: jest.fn(),
      setParams: jest.fn(),
    };
    render(<LoginScreen navigation={mockNavigation} />);
    // Two Text elements for privacy policy and terms & conditions should be rendered
    expect(screen.getByText('Privacy Policy')).toBeOnTheScreen();
    expect(screen.getByText('Terms & Conditions')).toBeOnTheScreen();
    // One Button element for create account should be rendered
    expect(screen.getByRole('button', { name: 'Create Account' })).toBeOnTheScreen();
  });

  it('renders the phone number screen', () => {
    const mockNavigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
      replace: jest.fn(),
      push: jest.fn(),
      pop: jest.fn(),
      popToTop: jest.fn(),
      setParams: jest.fn(),
    };
    render(<PhoneNumberScreen navigation={mockNavigation} />);
    expect(screen.getByText("What's your phone number?")).toBeOnTheScreen();
    expect(screen.getByRole('button', { name: 'Send' })).toBeOnTheScreen();
    // verify phone number input field and back button is on screen
    expect(screen.getByTestId('phone-number-input')).toBeOnTheScreen();
    expect(screen.getByText('Back')).toBeOnTheScreen();
  })
});
