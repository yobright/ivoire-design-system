import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Koros } from './Koros';

describe('Koros', () => {
  it('renders SVG element', () => {
    const { container } = render(<Koros />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies flip class', () => {
    const { container } = render(<Koros flipVertical />);
    expect(container.querySelector('.ivds-koros--flip')).toBeInTheDocument();
  });

  it('applies dense class', () => {
    const { container } = render(<Koros dense />);
    expect(container.querySelector('.ivds-koros--dense')).toBeInTheDocument();
  });

  it('passes data-testid', () => {
    render(<Koros data-testid="koros" />);
    expect(screen.getByTestId('koros')).toBeInTheDocument();
  });

  it('renders with different types', () => {
    const { container } = render(<Koros type="wave" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
