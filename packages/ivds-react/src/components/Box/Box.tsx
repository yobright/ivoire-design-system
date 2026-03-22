import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The HTML element or React component to render
   */
  as?: React.ElementType;
  /**
   * Children elements
   */
  children?: React.ReactNode;
  /**
   * Additional CSS styles
   */
  style?: React.CSSProperties;
  /**
   * CSS class name
   */
  className?: string;
}

/**
 * Box is the most primitive layout component.
 * It's an enhanced div that serves as a building block for other components.
 * 
 * @example
 * ```tsx
 * <Box as="section" style={{ padding: '20px', background: 'var(--color-brand-orange-light)' }}>
 *   Content goes here
 * </Box>
 * ```
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ as = 'div', children, style, ...props }, ref) => {
    const Component = as as React.ElementType;
    return (
      <Component
        ref={ref}
        style={{ boxSizing: 'border-box', ...style }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';

export default Box;
