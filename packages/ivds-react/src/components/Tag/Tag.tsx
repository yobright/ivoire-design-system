import React, { forwardRef } from 'react';
import { BaseComponentProps, Size, Variant } from '../../utils/types';

export interface TagProps extends BaseComponentProps {
  /** Tag variant */
  variant?: Variant | 'neutral';
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
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /** Icon to display */
  icon?: React.ReactNode;
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
      className = '',
      children,
      'data-testid': testId,
      ...props
    },
    ref
  ) => {
    const baseClass = 'ivds-tag';
    const tagClasses = [
      baseClass,
      `${baseClass}--${variant}`,
      size !== 'medium' && `${baseClass}--${size}`,
      shape === 'pill' && `${baseClass}--pill`,
      disabled && `${baseClass}--disabled`,
      onClick && !disabled && `${baseClass}--clickable`,
      removable && `${baseClass}--removable`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
      if (!disabled && onClick && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        (event.currentTarget as HTMLSpanElement).click();
      }
    };

    return (
      <span
        ref={ref}
        className={tagClasses}
        onClick={onClick ? handleClick : undefined}
        onKeyDown={onClick ? handleKeyDown : undefined}
        tabIndex={onClick && !disabled ? 0 : undefined}
        role={onClick ? 'button' : undefined}
        aria-disabled={disabled}
        data-testid={testId}
        {...props}
      >
        {icon && (
          <span className={`${baseClass}__icon`}>
            {icon}
          </span>
        )}
        
        <span className={`${baseClass}__text`}>
          {children}
        </span>
        
        {removable && (
          <button
            className={`${baseClass}__remove`}
            onClick={handleRemove}
            disabled={disabled}
            aria-label="Remove tag"
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