import React from 'react';
import { BaseComponentProps } from '../../utils/types';
import { Fieldset } from '../Fieldset';

export interface SelectionGroupProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  legend?: React.ReactNode;
  description?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string | boolean;
  direction?: 'vertical' | 'horizontal';
}

export const SelectionGroup = React.forwardRef<HTMLDivElement, SelectionGroupProps>(
  (
    {
      legend,
      description,
      helperText,
      error,
      direction = 'vertical',
      className = '',
      children,
      ...props
    },
    ref,
  ) => {
    const classes = [
      'ivds-selection-group',
      direction === 'horizontal' && 'ivds-selection-group--horizontal',
      className,
    ]
      .filter(Boolean)
      .join(' ');
    const group = (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );

    if (!legend) {
      return group;
    }

    return (
      <Fieldset legend={legend} description={description} helperText={helperText} error={error}>
        {group}
      </Fieldset>
    );
  },
);

SelectionGroup.displayName = 'SelectionGroup';
