import React, { forwardRef, useState } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface NotificationProps extends BaseComponentProps {
  /** Notification type */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** Notification title */
  title?: string;
  /** Whether the notification can be dismissed */
  dismissible?: boolean;
  /** Whether the notification is visible */
  visible?: boolean;
  /** Default visibility for uncontrolled component */
  defaultVisible?: boolean;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Whether to display the icon */
  showIcon?: boolean;
  /** Dismiss handler */
  onDismiss?: () => void;
  /** Action buttons */
  actions?: React.ReactNode;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      type = 'info',
      title,
      dismissible = false,
      visible,
      defaultVisible = true,
      icon,
      showIcon = true,
      onDismiss,
      actions,
      className = '',
      children,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const [internalVisible, setInternalVisible] = useState(defaultVisible);
    
    const isControlled = visible !== undefined;
    const isVisible = isControlled ? visible : internalVisible;

    const baseClass = 'ivds-notification';
    const notificationClasses = [
      baseClass,
      `${baseClass}--${type}`,
      dismissible && `${baseClass}--dismissible`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleDismiss = () => {
      if (!isControlled) {
        setInternalVisible(false);
      }
      onDismiss?.();
    };

    if (!isVisible) {
      return null;
    }

    const defaultIcons = {
      info: 'ℹ',
      success: '✓',
      warning: '⚠',
      error: '✕',
    };

    const displayIcon = icon !== undefined ? icon : defaultIcons[type];

    return (
      <div
        ref={ref}
        className={notificationClasses}
        role="alert"
        aria-live="polite"
        data-testid={testId}
        {...props}
      >
        {showIcon && displayIcon && (
          <div className={`${baseClass}__icon`}>
            {displayIcon}
          </div>
        )}
        
        <div className={`${baseClass}__content`}>
          {title && (
            <div className={`${baseClass}__title`}>
              {title}
            </div>
          )}
          
          {children && (
            <div className={`${baseClass}__message`}>
              {children}
            </div>
          )}
          
          {actions && (
            <div className={`${baseClass}__actions`}>
              {actions}
            </div>
          )}
        </div>
        
        {dismissible && (
          <button
            className={`${baseClass}__dismiss`}
            onClick={handleDismiss}
            aria-label="Dismiss notification"
            type="button"
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Notification.displayName = 'Notification';
