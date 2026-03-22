import React from 'react';

type Gap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
type JustifyItems = 'start' | 'end' | 'center' | 'stretch';
type AlignItems = 'start' | 'end' | 'center' | 'stretch';
type JustifyContent = 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
type AlignContent = 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The HTML element or React component to render
   */
  as?: React.ElementType;
  /**
   * Children elements
   */
  children?: React.ReactNode;
  /**
   * Grid template columns
   * @example 'repeat(3, 1fr)' or '200px 1fr 200px'
   */
  templateColumns?: string;
  /**
   * Grid template rows
   * @example 'repeat(3, 100px)' or 'auto 1fr auto'
   */
  templateRows?: string;
  /**
   * Grid template areas
   * @example '"header header" "sidebar main" "footer footer"'
   */
  templateAreas?: string;
  /**
   * Gap between items (uses spacing tokens)
   * @default '0'
   */
  gap?: Gap;
  /**
   * Row gap (uses spacing tokens)
   */
  rowGap?: Gap;
  /**
   * Column gap (uses spacing tokens)
   */
  columnGap?: Gap;
  /**
   * Justify items
   */
  justifyItems?: JustifyItems;
  /**
   * Align items
   */
  alignItems?: AlignItems;
  /**
   * Justify content
   */
  justifyContent?: JustifyContent;
  /**
   * Align content
   */
  alignContent?: AlignContent;
  /**
   * Auto flow
   */
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  /**
   * Auto columns
   */
  autoColumns?: string;
  /**
   * Auto rows
   */
  autoRows?: string;
  /**
   * Inline grid
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
 * Grid is a layout utility component that creates CSS Grid layouts.
 * It provides convenient props for common grid properties.
 * 
 * @example
 * ```tsx
 * <Grid templateColumns="repeat(3, 1fr)" gap="4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      as = 'div',
      children,
      templateColumns,
      templateRows,
      templateAreas,
      gap = '0',
      rowGap,
      columnGap,
      justifyItems,
      alignItems,
      justifyContent,
      alignContent,
      autoFlow,
      autoColumns,
      autoRows,
      inline = false,
      style,
      ...props
    },
    ref
  ) => {
    const Component = as as React.ElementType;
    const gapValue = gap !== '0' ? `var(--spacing-${gap})` : undefined;
    const rowGapValue = rowGap && rowGap !== '0' ? `var(--spacing-${rowGap})` : undefined;
    const columnGapValue = columnGap && columnGap !== '0' ? `var(--spacing-${columnGap})` : undefined;

    return (
      <Component
        ref={ref}
        style={{
          display: inline ? 'inline-grid' : 'grid',
          gridTemplateColumns: templateColumns,
          gridTemplateRows: templateRows,
          gridTemplateAreas: templateAreas,
          gap: gapValue,
          rowGap: rowGapValue,
          columnGap: columnGapValue,
          justifyItems,
          alignItems,
          justifyContent,
          alignContent,
          gridAutoFlow: autoFlow,
          gridAutoColumns: autoColumns,
          gridAutoRows: autoRows,
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

Grid.displayName = 'Grid';

export default Grid;
