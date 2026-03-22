import React, { forwardRef } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface CardProps extends BaseComponentProps {
  /** Card variant */
  variant?: 'elevated' | 'flat' | 'bordered' | 'glass' | 'glass-dark';
  /** Whether the card is interactive (clickable) */
  interactive?: boolean;
  /** Whether the card is disabled */
  disabled?: boolean;
  /** Click handler for interactive cards */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Header content */
  header?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Media content (images, etc.) */
  media?: React.ReactNode;
  /** Compact spacing for header/footer sections */
  compact?: boolean;
  /** Accessible label for the card region (used when card is non-interactive) */
  'aria-label'?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      interactive = false,
      disabled = false,
      onClick,
      header,
      footer,
      media,
      compact = false,
      className = '',
      children,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const baseClass = 'ivds-card';
    const cardClasses = [
      baseClass,
      `${baseClass}--${variant}`,
      interactive && `${baseClass}--interactive`,
      disabled && `${baseClass}--disabled`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && interactive && onClick) {
        onClick(event);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!disabled && interactive && onClick && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        // Simulate click by dispatching a native click event on the target
        (event.currentTarget as HTMLDivElement).click();
      }
    };

    return (
      <div
        ref={ref}
        className={cardClasses}
        onClick={interactive ? handleClick : undefined}
        onKeyDown={interactive ? handleKeyDown : undefined}
        tabIndex={interactive && !disabled ? 0 : undefined}
        role={interactive ? 'button' : 'region'}
        aria-disabled={disabled}
        data-testid={testId}
        {...props}
      >
        {media && <div className={`${baseClass}__media`}>{media}</div>}
        
        {header && (
          <div
            className={[
              `${baseClass}__header`,
              compact && `${baseClass}__header--compact`,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {header}
          </div>
        )}
        
        {children && <div className={`${baseClass}__body`}>{children}</div>}
        
        {footer && (
          <div
            className={[
              `${baseClass}__footer`,
              compact && `${baseClass}__footer--compact`,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';
