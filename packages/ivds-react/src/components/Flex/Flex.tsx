import React from 'react';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type AlignContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
type Gap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The HTML element or React component to render
   */
  as?: React.ElementType;
  /**
   * Children elements
   */
  children?: React.ReactNode;
  /**
   * Flex direction
   * @default 'row'
   */
  direction?: FlexDirection;
  /**
   * Flex wrap
   * @default 'nowrap'
   */
  wrap?: FlexWrap;
  /**
   * Justify content
   * @default 'flex-start'
   */
  justifyContent?: JustifyContent;
  /**
   * Align items
   * @default 'stretch'
   */
  alignItems?: AlignItems;
  /**
   * Align content
   */
  alignContent?: AlignContent;
  /**
   * Gap between items (uses spacing tokens)
   * @default '0'
   */
  gap?: Gap;
  /**
   * Inline flex
   * @default false
   */
  inline?: boolean;
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
 * Flex is a layout utility component that creates flexbox layouts.
 * It provides convenient props for common flexbox properties.
 * 
 * @example
 * ```tsx
 * <Flex direction="column" gap="4" alignItems="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Flex>
 * ```
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      as = 'div',
      children,
      direction = 'row',
      wrap = 'nowrap',
      justifyContent = 'flex-start',
      alignItems = 'stretch',
      alignContent,
      gap = '0',
      inline = false,
      style,
      ...props
    },
    ref
  ) => {
    const Component = as as React.ElementType;
    const gapValue = gap !== '0' ? `var(--spacing-${gap})` : undefined;

    return (
      <Component
        ref={ref}
        style={{
          display: inline ? 'inline-flex' : 'flex',
          flexDirection: direction,
          flexWrap: wrap,
          justifyContent,
          alignItems,
          alignContent,
          gap: gapValue,
          boxSizing: 'border-box',
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';

export default Flex;
