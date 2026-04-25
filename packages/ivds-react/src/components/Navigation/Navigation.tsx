import React from 'react';
import { BaseComponentProps } from '../../utils/types';

// ============================================================================
// HORIZONTAL NAVIGATION
// ============================================================================

export const Navigation: React.FC<
  BaseComponentProps & Omit<React.HTMLAttributes<HTMLElement>, keyof BaseComponentProps | 'children'>
> = ({ children, className = '', ...props }) => (
  <nav className={['ivds-navigation', className].filter(Boolean).join(' ')} {...props}>
    <ul className="ivds-navigation__list">
      {children}
    </ul>
  </nav>
);

export interface NavigationLinkProps
  extends BaseComponentProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseComponentProps | 'children'> {
  href?: string;
  active?: boolean;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ 
  href, 
  active, 
  children, 
  className = '', 
  ...props 
}) => {
  const classes = [
    'ivds-navigation__link',
    active && 'ivds-navigation__link--active',
    className,
  ].filter(Boolean).join(' ');

  return (
    <li className="ivds-navigation__item">
      <a href={href} className={classes} aria-current={active ? 'page' : undefined} {...props}>
        {children}
      </a>
    </li>
  );
};

// ============================================================================
// SIDE NAVIGATION
// ============================================================================

export const SideNav: React.FC<
  BaseComponentProps & Omit<React.HTMLAttributes<HTMLElement>, keyof BaseComponentProps | 'children'>
> = ({ children, className = '', ...props }) => (
  <nav className={['ivds-side-nav', className].filter(Boolean).join(' ')} {...props}>
    <ul className="ivds-side-nav__list">
      {children}
    </ul>
  </nav>
);

export const SideNavItem: React.FC<NavigationLinkProps> = ({ 
  href, 
  active, 
  children, 
  className = '', 
  ...props 
}) => {
  const classes = [
    'ivds-side-nav__link',
    active && 'ivds-side-nav__link--active',
    className,
  ].filter(Boolean).join(' ');

  return (
    <li className="ivds-side-nav__item">
      <a href={href} className={classes} aria-current={active ? 'page' : undefined} {...props}>
        {children}
      </a>
    </li>
  );
};

Navigation.displayName = 'Navigation';
NavigationLink.displayName = 'NavigationLink';
SideNav.displayName = 'SideNav';
SideNavItem.displayName = 'SideNavItem';
