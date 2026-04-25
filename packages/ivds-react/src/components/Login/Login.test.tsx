import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Login } from './Login';

describe('Login', () => {
  it('renders title', () => {
    render(<Login title="Sign In" />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Login description="Enter credentials" />);
    expect(screen.getByText('Enter credentials')).toBeInTheDocument();
  });

  it('renders children as fields', () => {
    render(<Login><input placeholder="Email" /></Login>);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('renders actions and footer', () => {
    render(
      <Login
        actions={<button type="submit">Log in</button>}
        footer={<span>No account?</span>}
      />,
    );
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.getByText('No account?')).toBeInTheDocument();
  });

  it('passes data-testid', () => {
    render(<Login data-testid="login" />);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });
});
