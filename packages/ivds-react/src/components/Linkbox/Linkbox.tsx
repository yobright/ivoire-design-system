import React, { useRef } from 'react';
import { IconArrowRight, IconExternalLink } from '../../icons';
import { BaseComponentProps } from '../../utils/types';

export interface LinkboxProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
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
  const linkRef = useRef<HTMLAnchorElement>(null);
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  const classes = [
    'ivds-linkbox',
    border && 'ivds-linkbox--border',
    noBackground && 'ivds-linkbox--no-bg',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    linkRef.current?.click();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      linkRef.current?.click();
    }
  };

  return (
    <div
      role="region"
      aria-label={linkboxAriaLabel}
      className={classes}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-testid={testId}
      {...props}
    >
      {imgSrc && <img className="ivds-linkbox__image" src={imgSrc} alt={imgAlt} width="400" height="225" loading="lazy" />}
      <div className="ivds-linkbox__body">
        {heading && <HeadingTag className="ivds-linkbox__heading">{heading}</HeadingTag>}
        {text && <p className="ivds-linkbox__text">{text}</p>}
        {children}
        <a
          ref={linkRef}
          href={href}
          className="ivds-linkbox__link"
          aria-label={linkAriaLabel}
          target={openInNewTab ? '_blank' : undefined}
          rel={openInNewTab || external ? 'noopener noreferrer' : undefined}
        >
          {external ? <IconExternalLink /> : <IconArrowRight />}
        </a>
      </div>
    </div>
  );
};

Linkbox.displayName = 'Linkbox';
