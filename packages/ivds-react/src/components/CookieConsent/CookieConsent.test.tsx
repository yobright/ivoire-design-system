import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CookieConsent } from './CookieConsent';

describe('CookieConsent', () => {
  it('renders title and description', () => {
    render(<CookieConsent title="Cookies" description="We use cookies." />);
    expect(screen.getByText('Cookies')).toBeInTheDocument();
    expect(screen.getByText('We use cookies.')).toBeInTheDocument();
  });

  it('has dialog role', () => {
    render(<CookieConsent title="Cookies" />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders actions slot', () => {
    render(
      <CookieConsent
        title="Cookies"
        actions={<button type="button">Accept</button>}
      />,
    );
    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument();
  });

  it('passes data-testid', () => {
    render(<CookieConsent title="Cookies" data-testid="cookie" />);
    expect(screen.getByTestId('cookie')).toBeInTheDocument();
  });
});
