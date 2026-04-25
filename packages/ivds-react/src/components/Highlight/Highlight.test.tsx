import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Highlight } from './Highlight';

describe('Highlight', () => {
  it('renders highlight text', () => {
    render(<Highlight text="Important statement" />);
    expect(screen.getByText('Important statement')).toBeInTheDocument();
  });

  it('renders as quote with reference', () => {
    render(<Highlight text="A quote" type="quote" reference="Author" />);
    expect(screen.getByText('A quote')).toHaveClass('ivds-highlight__text--quote');
    expect(screen.getByText(/Author/)).toBeInTheDocument();
  });

  it('applies size class', () => {
    const { container } = render(<Highlight text="Small" size="s" />);
    expect(container.querySelector('.ivds-highlight--s')).toBeInTheDocument();
  });

  it('does not render reference when not provided', () => {
    const { container } = render(<Highlight text="No ref" />);
    expect(container.querySelector('.ivds-highlight__reference')).not.toBeInTheDocument();
  });
});
