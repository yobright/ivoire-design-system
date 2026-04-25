import React, { forwardRef } from 'react';
import { BaseComponentProps, Size, Variant } from '../../utils/types';

export interface TagProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLSpanElement>, keyof BaseComponentProps | 'onClick' | 'children'> {
  /** Tag variant */
  variant?: Variant | 'error';
  /** Tag size */
  size?: Size;
  /** Tag shape */
  shape?: 'default' | 'pill';

  /** Whether the tag can be removed */
  removable?: boolean;
  /** Whether the tag is disabled */
  disabled?: boolean;
  /** Remove handler */
  onRemove?: () => void;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Accessible label for the remove button */
  removeButtonLabel?: string;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      variant = 'neutral',
      size = 'medium',
      shape = 'default',
      removable = false,
      disabled = false,
      onRemove,
      onClick,
      icon,
      removeButtonLabel = 'Remove tag',
      className = '',
      children,
      'aria-label': ariaLabel,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const baseClass = 'ivds-tag';
    const normalizedSize = size === 'xs' || size === 'sm' || size === 'small'
      ? 'small'
      : size === 'lg' || size === 'xl' || size === 'large'
        ? 'large'
        : 'medium';
    const tagClasses = [
      baseClass,
      `${baseClass}--${variant}`,
      normalizedSize !== 'medium' && `${baseClass}--${normalizedSize}`,
      shape === 'pill' && `${baseClass}--pill`,
      disabled && `${baseClass}--disabled`,
      onClick && !disabled && `${baseClass}--clickable`,
      removable && `${baseClass}--removable`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && onClick) {
        onClick(event);
      }
    };

    const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (!disabled && onRemove) {
        onRemove();
      }
    };

    const content = (
      <>
        {icon && (
          <span className={`${baseClass}__icon`} aria-hidden="true">
            {icon}
          </span>
        )}
        
        <span className={`${baseClass}__text`}>
          {children}
        </span>
      </>
    );

    return (
      <span
        ref={ref}
        className={tagClasses}
        aria-disabled={disabled || undefined}
        aria-label={!onClick ? ariaLabel : undefined}
        data-testid={testId}
        {...props}
      >
        {onClick ? (
          <button
            type="button"
            className={`${baseClass}__action`}
            onClick={handleClick}
            disabled={disabled}
            aria-label={ariaLabel}
          >
            {content}
          </button>
        ) : (
          content
        )}
        
        {removable && (
          <button
            className={`${baseClass}__remove`}
            onClick={handleRemove}
            disabled={disabled}
            aria-label={removeButtonLabel}
            type="button"
          >
            ×
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';