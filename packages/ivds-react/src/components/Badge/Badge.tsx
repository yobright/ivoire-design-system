import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface BadgeProps extends BaseComponentProps {
  /** Badge variant */
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'error' | 'outline';
  /** Whether to show a dot inside the badge */
  showDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  showDot = false,
  children,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const baseClass = 'ivds-badge';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} data-testid={testId} {...props}>
      {showDot && <span className={`${baseClass}__dot`} />}
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
