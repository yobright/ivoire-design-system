import React from 'react';
import { BaseComponentProps, ComponentCSSProperties } from '../../utils/types';

export type ContainerSize = 'default' | 'narrow' | 'wide' | 'full';

export interface ContainerProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  as?: React.ElementType;
  alignWithHeader?: boolean;
  size?: ContainerSize;
  flush?: boolean;
  maxWidth?: string;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as = 'div',
      alignWithHeader = false,
      size = 'default',
      flush = false,
      maxWidth,
      className = '',
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as as React.ElementType;
    const classes = [
      'ivds-container',
      alignWithHeader && 'ivds-container--align-with-header',
      size !== 'default' && `ivds-container--${size}`,
      flush && 'ivds-container--flush',
      className,
    ]
      .filter(Boolean)
      .join(' ');
    const containerStyle: ComponentCSSProperties = {
      ...style,
      ...(maxWidth ? { '--ivds-container-max-width': maxWidth } : {}),
    };

    return (
      <Component ref={ref} className={classes} style={containerStyle} {...props}>
        {children}
      </Component>
    );
  },
);

Container.displayName = 'Container';
