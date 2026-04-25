import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatusLabel } from './StatusLabel';

describe('StatusLabel', () => {
  it('renders with text', () => {
    render(<StatusLabel>Active</StatusLabel>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('applies type class', () => {
    const { container } = render(<StatusLabel type="success">OK</StatusLabel>);
    expect(container.querySelector('.ivds-status-label--success')).toBeInTheDocument();
  });

  it('renders icon', () => {
    render(<StatusLabel iconStart={<span data-testid="icon">*</span>}>Status</StatusLabel>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('passes data-testid', () => {
    render(<StatusLabel data-testid="status">Text</StatusLabel>);
    expect(screen.getByTestId('status')).toBeInTheDocument();
  });
});
