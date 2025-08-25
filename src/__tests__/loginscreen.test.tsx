import { render, screen } from '@testing-library/react-native';
import React from 'react';

import LoginScreen from '../screens/login/LoginScreen';

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
});
