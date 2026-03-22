import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface FooterProps extends BaseComponentProps {
  /** Whether to use light theme */
  light?: boolean;
  /** Number of columns in the grid */
  columns?: number;
  /** Max width of the inner container */
  maxWidth?: string;
}

export const Footer: React.FC<FooterProps> = ({
  light = false,
  columns = 4,
  className = '',
  maxWidth,
  children,
  'data-testid': testId,
  style,
  ...props
}) => {
  const baseClass = 'ivds-footer';
  const classes = [
    baseClass,
    light && `${baseClass}--light`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const containerStyle = maxWidth ? { '--container-max-width': maxWidth } as React.CSSProperties : {};
  const gridStyle = columns ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : {};

  return (
    <footer 
      className={classes} 
      data-testid={testId} 
      style={{ ...style, ...containerStyle }}
      {...props}
    >
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__grid`} style={gridStyle}>
          {children}
        </div>
      </div>
    </footer>
  );
};

export const FooterBrand: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <div className={`ivds-footer__brand ${className}`} {...props}>
    {children}
  </div>
);

export const FooterSection: React.FC<BaseComponentProps & { title?: string }> = ({ 
  title, 
  children, 
  className = '', 
  ...props 
}) => (
  <div className={`ivds-footer__section ${className}`} {...props}>
    {title && <h4 className="ivds-footer__section-title">{title}</h4>}
    <ul className="ivds-footer__section-list">
      {children}
    </ul>
  </div>
);

export const FooterSocial: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <div className={`ivds-footer__social ${className}`} {...props}>
    {children}
  </div>
);

export const FooterBottom: React.FC<BaseComponentProps> = ({ children, className = '', ...props }) => (
  <div className={`ivds-footer__bottom ${className}`} {...props}>
    {children}
  </div>
);

Footer.displayName = 'Footer';
FooterBrand.displayName = 'FooterBrand';
FooterSection.displayName = 'FooterSection';
FooterSocial.displayName = 'FooterSocial';
FooterBottom.displayName = 'FooterBottom';
