import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Header,
  HeaderActionBar,
  HeaderActions,
  HeaderBrand,
  HeaderNav,
  HeaderUniversalBar,
} from './Header';

describe('Header', () => {
  it('renders default header classes', () => {
    render(<Header>Content</Header>);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass('ivds-header');
    expect(header).toHaveClass('ivds-header--sticky');
    expect(header).toHaveClass('ivds-header--glass');
  });

  it('applies variant classes and max width variable', () => {
    render(
      <Header
        sticky={false}
        glass={false}
        scrolled
        dark
        maxWidth="1200px"
        className="custom-header"
        data-testid="header"
      >
        Content
      </Header>,
    );

    const header = screen.getByTestId('header');
    expect(header).toHaveClass('ivds-header');
    expect(header).toHaveClass('ivds-header--scrolled');
    expect(header).toHaveClass('ivds-header--dark');
    expect(header).toHaveClass('custom-header');
    expect(header).not.toHaveClass('ivds-header--sticky');
    expect(header).not.toHaveClass('ivds-header--glass');
    expect(header).toHaveStyle('--container-max-width: 1200px');
  });

  it('renders sub components with expected class names', () => {
    const { container } = render(
      <Header>
        <HeaderBrand>Brand</HeaderBrand>
        <HeaderNav>
          <a href="#">Home</a>
        </HeaderNav>
        <HeaderActions>Actions</HeaderActions>
      </Header>,
    );

    expect(screen.getByText('Brand')).toHaveClass('ivds-header__brand');
    expect(container.querySelector('.ivds-header__nav')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toHaveClass('ivds-header__actions');
    expect(container.querySelector('.ivds-header__container')).toBeInTheDocument();
  });

  it('renders universal and action bars with container wrapper', () => {
    const { container } = render(
      <>
        <HeaderUniversalBar>Universal</HeaderUniversalBar>
        <HeaderActionBar>Action</HeaderActionBar>
      </>,
    );

    expect(screen.getByText('Universal')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(container.querySelectorAll('.ivds-header__container').length).toBe(2);
  });
});
