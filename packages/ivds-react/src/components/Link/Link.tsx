import React from 'react';
import { BaseComponentProps } from '../../utils/types';

const visuallyHiddenStyles: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

export type LinkSize = 'small' | 'medium' | 'large';

export interface LinkProps
  extends BaseComponentProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseComponentProps | 'children'> {
  href: string;
  size?: LinkSize;
  external?: boolean;
  openInNewTab?: boolean;
  openInNewTabLabel?: string;
  externalDomainLabel?: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  useButtonStyles?: boolean;
  disableVisitedStyles?: boolean;
  children: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      size = 'medium',
      external = false,
      openInNewTab = false,
      openInNewTabLabel = 'ouvre dans un nouvel onglet',
      externalDomainLabel = 'site externe',
      iconStart,
      iconEnd,
      useButtonStyles = false,
      disableVisitedStyles = false,
      className = '',
      children,
      rel,
      target,
      ...props
    },
    ref,
  ) => {
    const classes = [
      'ivds-link',
      size === 'small' && 'ivds-link--small',
      size === 'large' && 'ivds-link--large',
      useButtonStyles && 'ivds-link--button',
      disableVisitedStyles && 'ivds-link--no-visited',
      className,
    ]
      .filter(Boolean)
      .join(' ');
    const resolvedTarget = openInNewTab ? '_blank' : target;
    const relTokens = new Set((rel ?? '').split(' ').filter(Boolean));

    if (resolvedTarget === '_blank') {
      relTokens.add('noopener');
      relTokens.add('noreferrer');
    }

    const assistiveText = [openInNewTab ? openInNewTabLabel : null, external ? externalDomainLabel : null]
      .filter(Boolean)
      .join(', ');
    const trailingVisual = external ? '↗' : iconEnd;

    return (
      <a
        ref={ref}
        href={href}
        target={resolvedTarget}
        rel={resolvedTarget === '_blank' ? Array.from(relTokens).join(' ') : rel}
        className={classes}
        {...props}
      >
        {iconStart ? (
          <span className="ivds-link__icon" aria-hidden="true">
            {iconStart}
          </span>
        ) : null}
        <span>{children}</span>
        {assistiveText ? <span style={visuallyHiddenStyles}> ({assistiveText})</span> : null}
        {trailingVisual ? (
          <span className="ivds-link__icon" aria-hidden="true">
            {trailingVisual}
          </span>
        ) : null}
      </a>
    );
  },
);

Link.displayName = 'Link';
