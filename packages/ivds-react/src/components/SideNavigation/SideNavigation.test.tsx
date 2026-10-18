import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SideNavigation, SideNavigationItem } from './SideNavigation';

describe('SideNavigation', () => {
  it('renders side navigation links with active state', () => {
    render(
      <SideNavigation aria-label="Navigation secondaire">
        <SideNavigationItem href="/profil" active>
          Profil
        </SideNavigationItem>
      </SideNavigation>,
    );

    expect(screen.getByRole('navigation', { name: 'Navigation secondaire' })).toHaveClass('ivds-side-nav');
    expect(screen.getByRole('link', { name: 'Profil' })).toHaveAttribute('aria-current', 'page');
  });
});
