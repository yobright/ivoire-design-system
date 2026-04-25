import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export type StatusLabelType = 'neutral' | 'info' | 'success' | 'alert' | 'error';

export interface StatusLabelProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLSpanElement>, keyof BaseComponentProps | 'children'> {
  type?: StatusLabelType;
  iconStart?: React.ReactNode;
}

export const StatusLabel: React.FC<StatusLabelProps> = ({
  children,
  type = 'neutral',
  iconStart,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const classes = ['ivds-status-label', `ivds-status-label--${type}`, iconStart && 'ivds-status-label--with-icon', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} data-testid={testId} {...props}>
      {iconStart ? (
        <span className="ivds-status-label__icon" aria-hidden="true">
          {iconStart}
        </span>
      ) : null}
      <span className="ivds-status-label__text">{children}</span>
    </span>
  );
};

StatusLabel.displayName = 'StatusLabel';
