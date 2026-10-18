import React from 'react';
import { IconArrowRight, IconExternalLink } from '../../icons';
import { BaseComponentProps } from '../../utils/types';

export interface LinkboxProps
  extends BaseComponentProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseComponentProps | 'children' | 'href'> {
  href: string;
  heading?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  text?: string;
  imgSrc?: string;
  imgAlt?: string;
  external?: boolean;
  openInNewTab?: boolean;
  linkAriaLabel: string;
  linkboxAriaLabel: string;
  border?: boolean;
  noBackground?: boolean;
}

export const Linkbox: React.FC<LinkboxProps> = ({
  href,
  heading,
  headingLevel = 2,
  text,
  imgSrc,
  imgAlt = '',
  external = false,
  openInNewTab = false,
  linkAriaLabel,
  linkboxAriaLabel,
  border = false,
  noBackground = false,
  children,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  const accessibleLabel = linkAriaLabel || linkboxAriaLabel;

  const classes = [
    'ivds-linkbox',
    border && 'ivds-linkbox--border',
    noBackground && 'ivds-linkbox--no-bg',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      href={href}
      aria-label={accessibleLabel}
      className={classes}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab || external ? 'noopener noreferrer' : undefined}
      data-testid={testId}
      {...props}
    >
      {imgSrc && <img className="ivds-linkbox__image" src={imgSrc} alt={imgAlt} width="400" height="225" loading="lazy" />}
      <div className="ivds-linkbox__body">
        {heading && <HeadingTag className="ivds-linkbox__heading">{heading}</HeadingTag>}
        {text && <p className="ivds-linkbox__text">{text}</p>}
        {children}
        <span className="ivds-linkbox__link" aria-hidden="true">
          {external ? <IconExternalLink /> : <IconArrowRight />}
        </span>
      </div>
    </a>
  );
};

Linkbox.displayName = 'Linkbox';
