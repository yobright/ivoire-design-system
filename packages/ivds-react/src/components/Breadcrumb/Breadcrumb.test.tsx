import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news' },
    { label: 'Current page', isCurrent: true },
  ];

  it('renders breadcrumb links and current page', () => {
    render(<Breadcrumb items={items} />);

    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'News' })).toHaveAttribute('href', '/news');

    const current = screen.getByText('Current page');
    expect(current).toHaveAttribute('aria-current', 'page');
    expect(screen.getAllByText('/').length).toBe(2);
  });

  it('renders custom separator', () => {
    render(<Breadcrumb items={items} separator=">" />);

    expect(screen.getAllByText('>').length).toBe(2);
  });
});
