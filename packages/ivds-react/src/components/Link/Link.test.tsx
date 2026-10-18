import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from './Link';

describe('Link', () => {
  it('renders a semantic anchor', () => {
    render(<Link href="/services">Services</Link>);

    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');
  });

  it('adds safe new-tab attributes and assistive text', () => {
    render(
      <Link href="https://example.com" openInNewTab external>
        Consulter
      </Link>,
    );

    const link = screen.getByRole('link', { name: /Consulter/ });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(link).toHaveTextContent('ouvre dans un nouvel onglet');
    expect(link).toHaveTextContent('site externe');
  });
});
