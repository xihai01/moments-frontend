import { render, RenderOptions } from '@testing-library/react-native';
import React from 'react';

import { Provider as AuthProvider } from '../components/context/AuthContext';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export function renderWithProviders<T>(
  ui: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
}
