import React, { useState } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface AlertProps extends BaseComponentProps {
  /** Alert variant - info, success, warning, error, or orange */
  variant?: 'info' | 'success' | 'warning' | 'error' | 'orange';
  /** Optional title for the alert */
  title?: string;
  /** Optional icon to display */
  icon?: React.ReactNode;
  /** Whether the alert is dismissible (not implemented in this simple version yet) */
  dismissible?: boolean;
  /** Callback for when the alert is dismissed */
  onDismiss?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  icon,
  dismissible = false,
  onDismiss,
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

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={classes} role="alert" data-testid={testId} {...props}>
      {icon && <span className={`${baseClass}__icon`}>{icon}</span>}
      <div className={`${baseClass}__body`}>
        {title && <span className={`${baseClass}__title`}>{title}</span>}
        <div className={`${baseClass}__content`}>{children}</div>
      </div>
      {dismissible && (
        <button
          className={`${baseClass}__dismiss`}
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};

Alert.displayName = 'Alert';
