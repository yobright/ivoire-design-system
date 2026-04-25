import React from 'react';
import { BaseComponentProps } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export interface FieldsetProps
  extends BaseComponentProps,
    Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, keyof BaseComponentProps | 'children'> {
  legend: React.ReactNode;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string | boolean;
  contentClassName?: string;
}

export const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ legend, description, helperText, error, contentClassName = '', className = '', children, id, ...props }, ref) => {
    const fieldsetId = useStableId(id, 'ivds-fieldset');
    const descriptionId = description ? `${fieldsetId}-description` : undefined;
    const errorId = typeof error === 'string' ? `${fieldsetId}-error` : undefined;
    const helperId = helperText ? `${fieldsetId}-helper` : undefined;
    const describedBy = [descriptionId, errorId, helperId].filter(Boolean).join(' ') || undefined;
    const classes = ['ivds-fieldset', error && 'ivds-fieldset--error', className].filter(Boolean).join(' ');

    return (
      <fieldset ref={ref} id={fieldsetId} className={classes} aria-describedby={describedBy} {...props}>
        <legend className="ivds-fieldset__legend">{legend}</legend>
        {description ? (
          <div className="ivds-fieldset__description" id={descriptionId}>
            {description}
          </div>
        ) : null}
        <div className={['ivds-fieldset__content', contentClassName].filter(Boolean).join(' ')}>{children}</div>
        {typeof error === 'string' ? (
          <div className="ivds-fieldset__error" id={errorId} aria-live="polite">
            {error}
          </div>
        ) : null}
        {helperText ? (
          <div className="ivds-fieldset__helper" id={helperId} hidden={typeof error === 'string' || undefined}>
            {helperText}
          </div>
        ) : null}
      </fieldset>
    );
  },
);

Fieldset.displayName = 'Fieldset';
