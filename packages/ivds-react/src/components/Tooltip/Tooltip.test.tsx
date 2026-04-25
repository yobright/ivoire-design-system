import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders trigger button', () => {
    render(<Tooltip>Tooltip content</Tooltip>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows content on click', () => {
    render(<Tooltip>Tooltip content</Tooltip>);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
  });

  it('applies small variant on bubble', () => {
    const { container } = render(<Tooltip small>Small tooltip</Tooltip>);
    fireEvent.click(screen.getByRole('button'));
    expect(container.querySelector('.ivds-tooltip__bubble--small')).toBeInTheDocument();
  });

  it('passes data-testid', () => {
    render(<Tooltip data-testid="tip">Content</Tooltip>);
    expect(screen.getByTestId('tip')).toBeInTheDocument();
  });
});
