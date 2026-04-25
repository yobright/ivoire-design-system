import React, { useState } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface AlertProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  /** Alert variant - info, success, warning, error, brand, or legacy orange */
  variant?: 'info' | 'success' | 'warning' | 'error' | 'brand' | 'orange';
  /** Optional title for the alert */
  title?: string;
  /** Optional icon to display */
  icon?: React.ReactNode;
  /** Whether the alert is dismissible (not implemented in this simple version yet) */
  dismissible?: boolean;
  /** Callback for when the alert is dismissed */
  onDismiss?: () => void;
  /** Live region politeness */
  live?: 'polite' | 'assertive' | 'off';
  /** Accessible label for the dismiss button */
  dismissLabel?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  icon,
  dismissible = false,
  onDismiss,
  live,
  dismissLabel = 'Dismiss alert',
  children,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const baseClass = 'ivds-alert';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const [isVisible, setIsVisible] = useState(true);
  const resolvedLive = live ?? (variant === 'error' ? 'assertive' : 'polite');
  const resolvedRole = resolvedLive === 'assertive' ? 'alert' : resolvedLive === 'off' ? undefined : 'status';

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={classes} role={resolvedRole} aria-live={resolvedLive === 'off' ? undefined : resolvedLive} data-testid={testId} {...props}>
      {icon && <span className={`${baseClass}__icon`} aria-hidden="true">{icon}</span>}
      <div className={`${baseClass}__body`}>
        {title && <span className={`${baseClass}__title`}>{title}</span>}
        <div className={`${baseClass}__content`}>{children}</div>
      </div>
      {dismissible && (
        <button
          className={`${baseClass}__dismiss`}
          onClick={handleDismiss}
          aria-label={dismissLabel}
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};

Alert.displayName = 'Alert';
