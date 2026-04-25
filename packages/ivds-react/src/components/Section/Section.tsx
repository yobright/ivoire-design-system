import React from 'react';
import { BaseComponentProps, ComponentCSSProperties } from '../../utils/types';

export type SectionVariant = 'plain' | 'subtle' | 'accent' | 'strong';

export interface SectionProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  as?: React.ElementType;
  variant?: SectionVariant;
  contained?: boolean;
  contentClassName?: string;
  flush?: boolean;
  maxWidth?: string;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      as = 'section',
      variant = 'plain',
      contained = true,
      contentClassName = '',
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
      'ivds-section',
      variant !== 'plain' && `ivds-section--${variant}`,
      flush && 'ivds-section--flush',
      className,
    ]
      .filter(Boolean)
      .join(' ');
    const sectionStyle: ComponentCSSProperties = {
      ...style,
      ...(maxWidth ? { '--container-max-width': maxWidth } : {}),
    };

    return (
      <Component ref={ref} className={classes} style={sectionStyle} {...props}>
        {contained ? <div className={['ivds-section__content', contentClassName].filter(Boolean).join(' ')}>{children}</div> : children}
      </Component>
    );
  },
);

Section.displayName = 'Section';
