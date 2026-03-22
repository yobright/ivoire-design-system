import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navigation, NavigationLink, SideNav, SideNavItem } from './Navigation';

describe('Navigation', () => {
  it('renders horizontal navigation links', () => {
    const { container } = render(
      <Navigation aria-label="Primary navigation">
        <NavigationLink href="/home">Home</NavigationLink>
        <NavigationLink href="/news" active>
          News
        </NavigationLink>
      </Navigation>,
    );

    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
    expect(container.querySelector('.ivds-navigation__list')).toBeInTheDocument();

    const activeLink = screen.getByRole('link', { name: 'News' });
    expect(activeLink).toHaveClass('ivds-navigation__link--active');
    expect(activeLink).toHaveAttribute('href', '/news');
  });

  it('renders side navigation links', () => {
    render(
      <SideNav aria-label="Section navigation">
        <SideNavItem href="/services" active>
          Services
        </SideNavItem>
        <SideNavItem href="/agenda">Agenda</SideNavItem>
      </SideNav>,
    );

    expect(screen.getByRole('navigation', { name: 'Section navigation' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Services' })).toHaveClass('ivds-side-nav__link--active');
    expect(screen.getByRole('link', { name: 'Agenda' })).toHaveAttribute('href', '/agenda');
  });
});
