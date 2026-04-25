import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('renders heading', () => {
    render(<Accordion heading="FAQ">Content</Accordion>);
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });

  it('starts closed by default', () => {
    render(<Accordion heading="FAQ">Hidden content</Accordion>);
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('opens on click', () => {
    render(<Accordion heading="FAQ">Visible content</Accordion>);
    fireEvent.click(screen.getByRole('button', { name: /FAQ/ }));
    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  it('starts open with initiallyOpen', () => {
    render(<Accordion heading="FAQ" initiallyOpen>Content</Accordion>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies card variant', () => {
    const { container } = render(<Accordion heading="Card" card>Content</Accordion>);
    expect(container.querySelector('.ivds-accordion--card')).toBeInTheDocument();
  });

  it('sets aria-expanded correctly', () => {
    render(<Accordion heading="FAQ">Content</Accordion>);
    const button = screen.getByRole('button', { name: /FAQ/ });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
