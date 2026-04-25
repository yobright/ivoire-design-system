import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface BreadcrumbProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLElement>, keyof BaseComponentProps | 'children'> {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Optional custom separator */
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className = '',
  'aria-label': ariaLabel,
  'data-testid': testId,
  ...props
}) => {
  const baseClass = 'ivds-breadcrumb';
  const classes = [baseClass, className].filter(Boolean).join(' ');
  const resolvedAriaLabel = ariaLabel ?? 'Breadcrumb';
  
  return (
    <nav className={classes} aria-label={resolvedAriaLabel} data-testid={testId} {...props}>
      <ol className={`${baseClass}__list`}>
        {items.map((item, index) => (
          <li key={`${item.href ?? 'current'}-${item.label}`} className={`${baseClass}__item`}>
            {item.href && !item.isCurrent ? (
              <a href={item.href} className={`${baseClass}__link`}>
                {item.label}
              </a>
            ) : (
              <span 
                className={item.isCurrent ? `${baseClass}__current` : ''}
                aria-current={item.isCurrent ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className={`${baseClass}__separator`} aria-hidden="true">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';
