import React from 'react';
import { BaseComponentProps } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface FooterProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLElement>, keyof BaseComponentProps | 'children'> {
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

export const FooterBrand: React.FC<
  BaseComponentProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'>
> = ({ children, className = '', ...props }) => (
  <div className={['ivds-footer__brand', className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
);

export interface FooterSectionProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLElement>, keyof BaseComponentProps | 'children' | 'title'> {
  title?: React.ReactNode;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  children,
  className = '',
  id,
  ...props
}) => {
  const titleId = useStableId(id ? `${id}-title` : undefined, 'ivds-footer-section');

  return (
    <section
      id={id}
      className={['ivds-footer__section', className].filter(Boolean).join(' ')}
      aria-labelledby={title ? titleId : undefined}
      {...props}
    >
      {title && <h4 id={titleId} className="ivds-footer__section-title">{title}</h4>}
      <ul className="ivds-footer__section-list">
        {children}
      </ul>
    </section>
  );
};

export const FooterSocial: React.FC<
  BaseComponentProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'>
> = ({ children, className = '', ...props }) => (
  <div className={['ivds-footer__social', className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
);

export const FooterBottom: React.FC<
  BaseComponentProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'>
> = ({ children, className = '', ...props }) => (
  <div className={['ivds-footer__bottom', className].filter(Boolean).join(' ')} {...props}>
    {children}
  </div>
);

Footer.displayName = 'Footer';
FooterBrand.displayName = 'FooterBrand';
FooterSection.displayName = 'FooterSection';
FooterSocial.displayName = 'FooterSocial';
FooterBottom.displayName = 'FooterBottom';
