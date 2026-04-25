import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface ErrorSummaryItem {
  id?: string;
  label: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export interface ErrorSummaryProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLElement>, keyof BaseComponentProps | 'children' | 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  errors: ErrorSummaryItem[];
}

export const ErrorSummary = React.forwardRef<HTMLElement, ErrorSummaryProps>(
  (
    {
      title = 'Corrigez les champs suivants',
      description,
      errors,
      className = '',
      ...props
    },
    ref,
  ) => {
    const classes = ['ivds-error-summary', className].filter(Boolean).join(' ');

    return (
      <section ref={ref} className={classes} role="alert" aria-live="polite" {...props}>
        <h2 className="ivds-error-summary__title">{title}</h2>
        {description ? <p className="ivds-error-summary__description">{description}</p> : null}
        <ol className="ivds-error-summary__list">
          {errors.map((error, index) => (
            <li key={error.id ?? `${index}-${String(error.label)}`}>
              {error.href ? (
                <a className="ivds-error-summary__link" href={error.href} onClick={error.onClick}>
                  {error.label}
                </a>
              ) : (
                <button type="button" className="ivds-error-summary__link" onClick={error.onClick}>
                  {error.label}
                </button>
              )}
            </li>
          ))}
        </ol>
      </section>
    );
  },
);

ErrorSummary.displayName = 'ErrorSummary';
