import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface HeaderProps extends BaseComponentProps {
  /** Whether the header is sticky */
  sticky?: boolean;
  /** Whether to use glassmorphism */
  glass?: boolean;
  /** Whether the header is in scrolled state */
  scrolled?: boolean;
  /** Whether to use dark theme */
  dark?: boolean;
  /** Max width of the inner container */
  maxWidth?: string;
}

export const Header: React.FC<HeaderProps> = ({
  sticky = true,
  glass = true,
  scrolled = false,
  dark = false,
  className = '',
  maxWidth,
  children,
  'data-testid': testId,
  style,
  ...props
}) => {
  const baseClass = 'ivds-header';
  const classes = [
    baseClass,
    sticky && `${baseClass}--sticky`,
    glass && `${baseClass}--glass`,
    scrolled && `${baseClass}--scrolled`,
    dark && `${baseClass}--dark`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const containerStyle = maxWidth ? { '--container-max-width': maxWidth } as React.CSSProperties : {};

  return (
    <header 
      className={classes} 
      data-testid={testId} 
      style={{ ...style, ...containerStyle }}
      {...props}
    >
      <div className={`${baseClass}__container`}>
        {children}
      </div>
    </header>
  );
};

export const HeaderBrand: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <div className={`ivds-header__brand ${className}`} {...props}>
    {children}
  </div>
);

export const HeaderNav: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <nav className={`ivds-header__nav ${className}`} {...props}>
    {children}
  </nav>
);

export const HeaderActions: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <div className={`ivds-header__actions ${className}`} {...props}>
    {children}
  </div>
);

Header.displayName = 'Header';
HeaderBrand.displayName = 'HeaderBrand';
HeaderNav.displayName = 'HeaderNav';
HeaderActions.displayName = 'HeaderActions';

export const HeaderUniversalBar: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <div className={`ivds-header__universal-bar ${className}`} {...props}>
    <div className="ivds-header__container">
      {children}
    </div>
  </div>
);

export const HeaderActionBar: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <div className={`ivds-header__action-bar ${className}`} {...props}>
    <div className="ivds-header__container">
      {children}
    </div>
  </div>
);

HeaderUniversalBar.displayName = 'HeaderUniversalBar';
HeaderActionBar.displayName = 'HeaderActionBar';
