import React from 'react';
import { BaseComponentProps } from '../../utils/types';

// ============================================================================
// HORIZONTAL NAVIGATION
// ============================================================================

export const Navigation: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <nav className={`ivds-navigation ${className}`} {...props}>
    <ul className="ivds-navigation__list">
      {children}
    </ul>
  </nav>
);

export interface NavigationLinkProps extends BaseComponentProps {
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
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    </li>
  );
};

// ============================================================================
// SIDE NAVIGATION
// ============================================================================

export const SideNav: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <nav className={`ivds-side-nav ${className}`} {...props}>
    {children}
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
    <div className="ivds-side-nav__item">
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    </div>
  );
};

Navigation.displayName = 'Navigation';
NavigationLink.displayName = 'NavigationLink';
SideNav.displayName = 'SideNav';
SideNavItem.displayName = 'SideNavItem';
