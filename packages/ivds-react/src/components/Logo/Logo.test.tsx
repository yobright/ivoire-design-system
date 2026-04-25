import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders image with alt text', () => {
    render(<Logo src="logo.svg" alt="IVDS Logo" />);
    const img = screen.getByAltText('IVDS Logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'logo.svg');
  });

  it('applies size class', () => {
    const { container } = render(<Logo src="logo.svg" alt="Logo" size="large" />);
    expect(container.querySelector('.ivds-logo--large')).toBeInTheDocument();
  });

  it('applies medium by default', () => {
    const { container } = render(<Logo src="logo.svg" alt="Logo" />);
    expect(container.querySelector('.ivds-logo--medium')).toBeInTheDocument();
  });

  it('passes data-testid', () => {
    render(<Logo src="logo.svg" alt="Logo" data-testid="logo" />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
