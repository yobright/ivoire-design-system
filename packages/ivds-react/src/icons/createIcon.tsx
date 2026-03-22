import React, { forwardRef } from 'react';
import { IconProps, defaultIconProps } from './types';

/**
 * Creates an icon component from SVG path data
 * This is the foundation for all icons in the system
 */
export const createIcon = (
  displayName: string,
  children: React.ReactNode
) => {
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    (
      {
        size = defaultIconProps.size,
        color = defaultIconProps.color,
        strokeWidth = defaultIconProps.strokeWidth,
        className = '',
        'aria-label': ariaLabel,
        ...props
      },
      ref
    ) => {
      const computedSize = typeof size === 'number' ? `${size}px` : size;

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={computedSize}
          height={computedSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`ivds-icon ivds-icon--${displayName.toLowerCase()} ${className}`.trim()}
          aria-label={ariaLabel}
          aria-hidden={!ariaLabel}
          role={ariaLabel ? 'img' : 'presentation'}
          {...props}
        >
          {children}
        </svg>
      );
    }
  );

  Icon.displayName = displayName;
  return Icon;
};

/**
 * Creates a filled icon component (uses fill instead of stroke)
 */
export const createFilledIcon = (
  displayName: string,
  children: React.ReactNode
) => {
  const Icon = forwardRef<SVGSVGElement, Omit<IconProps, 'strokeWidth'>>(
    (
      {
        size = defaultIconProps.size,
        color = defaultIconProps.color,
        className = '',
        'aria-label': ariaLabel,
        ...props
      },
      ref
    ) => {
      const computedSize = typeof size === 'number' ? `${size}px` : size;

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={computedSize}
          height={computedSize}
          viewBox="0 0 24 24"
          fill={color}
          stroke="none"
          className={`ivds-icon ivds-icon--${displayName.toLowerCase()} ivds-icon--filled ${className}`.trim()}
          aria-label={ariaLabel}
          aria-hidden={!ariaLabel}
          role={ariaLabel ? 'img' : 'presentation'}
          {...props}
        >
          {children}
        </svg>
      );
    }
  );

  Icon.displayName = displayName;
  return Icon;
};
