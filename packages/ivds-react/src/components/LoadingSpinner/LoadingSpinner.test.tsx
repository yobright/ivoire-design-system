import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders loading text for screen readers', () => {
    render(<LoadingSpinner loadingText="Chargement en cours" />);
    expect(screen.getAllByText('Chargement en cours').length).toBeGreaterThanOrEqual(1);
  });

  it('applies small variant', () => {
    const { container } = render(<LoadingSpinner small />);
    expect(container.querySelector('.ivds-loading-spinner--small')).toBeInTheDocument();
  });

  it('applies multicolor variant', () => {
    const { container } = render(<LoadingSpinner multicolor />);
    expect(container.querySelector('.ivds-loading-spinner--multicolor')).toBeInTheDocument();
  });

  it('passes data-testid', () => {
    render(<LoadingSpinner data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
