import React from 'react';
import { BaseComponentProps, ComponentCSSProperties } from '../../utils/types';

export interface ColumnsProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  as?: React.ElementType;
  columns?: number;
  gap?: string | number;
  minColumnWidth?: string;
  responsive?: boolean;
  dense?: boolean;
}

export const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(
  (
    {
      as = 'div',
      columns = 2,
      gap,
      minColumnWidth,
      responsive = true,
      dense = false,
      className = '',
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as as React.ElementType;
    const classes = [
      'ivds-columns',
      responsive && 'ivds-columns--responsive',
      dense && 'ivds-columns--dense',
      className,
    ]
      .filter(Boolean)
      .join(' ');
    const columnsStyle: ComponentCSSProperties = {
      ...style,
      ...(columns ? { '--ivds-columns-count': columns } : {}),
      ...(gap !== undefined
        ? { '--ivds-columns-gap': typeof gap === 'number' ? `${gap}px` : gap }
        : {}),
      ...(minColumnWidth ? { '--ivds-columns-min-width': minColumnWidth } : {}),
    };

    return (
      <Component ref={ref} className={classes} style={columnsStyle} {...props}>
        {children}
      </Component>
    );
  },
);

Columns.displayName = 'Columns';
