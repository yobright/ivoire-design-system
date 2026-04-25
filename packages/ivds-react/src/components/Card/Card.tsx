import React, { forwardRef } from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface CardProps extends BaseComponentProps {
  /** Card variant */
  variant?: 'elevated' | 'flat' | 'bordered' | 'floating' | 'glass' | 'glass-dark' | 'premium';
  /** Whether the card is interactive (clickable) */
  interactive?: boolean;
  /** Whether the card is disabled */
  disabled?: boolean;
  /** Click handler for interactive cards */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  /** Header content */
  header?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Media content (images, etc.) */
  media?: React.ReactNode;
  /** Compact spacing for header/footer sections */
  compact?: boolean;
  /** Button type when card is interactive */
  buttonType?: 'button' | 'submit' | 'reset';
  /** Accessible label for the card region (used when card is non-interactive) */
  'aria-label'?: string;
}

export const Card = forwardRef<HTMLDivElement | HTMLButtonElement, CardProps>(
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
      buttonType = 'button',
      className = '',
      children,
      'aria-label': ariaLabel,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const baseClass = 'ivds-card';
    const cardClasses = [
      baseClass,
      `${baseClass}--${variant}`,
      compact && `${baseClass}--compact`,
      interactive && `${baseClass}--interactive`,
      disabled && `${baseClass}--disabled`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
      if (!disabled && interactive && onClick) {
        onClick(event);
      }
    };

    const content = (
      <>
        {media && <div className={`${baseClass}__media`}>{media}</div>}

        {header && <div className={`${baseClass}__header`}>{header}</div>}

        {children != null && <div className={`${baseClass}__body`}>{children}</div>}

        {footer && <div className={`${baseClass}__footer`}>{footer}</div>}
      </>
    );

    if (interactive) {
      return (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          type={buttonType}
          className={cardClasses}
          onClick={handleClick}
          disabled={disabled}
          data-testid={testId}
          aria-label={ariaLabel}
          {...props}
        >
          {content}
        </button>
      );
    }

    return (
      <div
        ref={ref as React.ForwardedRef<HTMLDivElement>}
        className={cardClasses}
        role={ariaLabel ? 'region' : undefined}
        aria-label={ariaLabel}
        data-testid={testId}
        {...props}
      >
        {content}
      </div>
    );
  }
);

Card.displayName = 'Card';
