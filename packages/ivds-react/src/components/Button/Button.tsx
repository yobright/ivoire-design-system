import React, { forwardRef } from 'react';
import { BaseComponentProps, ButtonVariant, Size } from '../../utils/types';

export interface ButtonProps
  extends BaseComponentProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseComponentProps | 'onClick' | 'children' | 'type'> {
  /** Button variant - solid, gradient, outline, ghost, or glass */
  variant?: ButtonVariant;
  /** Button size */
  size?: Size;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Whether the button is icon-only */
  iconOnly?: boolean;
  /** Use pill shape (fully rounded) */
  pill?: boolean;
  /** Button shape */
  shape?: 'default' | 'pill' | 'icon-only';
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Icon element to display on the left */
  iconLeft?: React.ReactNode;
  /** Icon element to display on the right */
  iconRight?: React.ReactNode;
  /** Position of the icon (legacy) */
  iconPosition?: 'left' | 'right';
  /** If icon should be treated as an arrow (will animate on hover) */
  iconIsArrow?: boolean;
  /** Accessible label, required for icon-only usage */
  'aria-label'?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      disabled = false,
      loading = false,
      fullWidth = false,
      iconOnly = false,
      pill = false,
      shape,
      type = 'button',
      className = '',
      children,
      onClick,
      icon,
      iconLeft,
      iconRight,
      iconPosition = 'left',
      iconIsArrow = false,
      'aria-label': ariaLabel,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const baseClass = 'ivds-button';

    // Normalize size and variant aliases
    const normalizedSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : size;
    const isPill = pill || shape === 'pill';
    const isIconOnly = iconOnly || shape === 'icon-only';
    const resolvedAriaLabel = ariaLabel ?? (isIconOnly && typeof children === 'string' ? children : undefined);

    const classes = [
      baseClass,
      `${baseClass}--${variant}`,
      normalizedSize !== 'medium' && `${baseClass}--${normalizedSize}`,
      loading && `${baseClass}--loading`,
      fullWidth && `${baseClass}--full-width`,
      isIconOnly && `${baseClass}--icon-only`,
      isPill && `${baseClass}--pill`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const leftIcon = iconLeft || (icon && iconPosition === 'left' ? icon : null);
    const rightIcon = iconRight || (icon && iconPosition === 'right' ? icon : null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && !loading && onClick) {
        onClick(event);
      }
    };

    const renderContent = () => {
      if (isIconOnly) {
        const iconOnlyContent = leftIcon || rightIcon || icon || children;

        if (typeof iconOnlyContent === 'string') {
          return <span className={`${baseClass}__text`}>{iconOnlyContent}</span>;
        }

        return iconOnlyContent ? (
          <span className={`${baseClass}__icon`} aria-hidden="true">
            {iconOnlyContent}
          </span>
        ) : null;
      }

      const leftIconClasses = [
        `${baseClass}__icon`,
        `${baseClass}__icon--left`,
      ].filter(Boolean).join(' ');

      const rightIconClasses = [
        `${baseClass}__icon`,
        `${baseClass}__icon--right`,
        iconIsArrow && `${baseClass}__icon--arrow-right`,
      ].filter(Boolean).join(' ');

      return (
        <>
          {leftIcon && (
            <span className={leftIconClasses} aria-hidden="true">
              {leftIcon}
            </span>
          )}
          {children && <span className={`${baseClass}__text`}>{children}</span>}
          {rightIcon && (
            <span className={rightIconClasses} aria-hidden="true">
              {rightIcon}
            </span>
          )}
        </>
      );
    };

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || loading}
        onClick={handleClick}
        data-testid={testId}
        aria-label={resolvedAriaLabel}
        aria-disabled={disabled || loading || undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

Button.displayName = 'Button';
