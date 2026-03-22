import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon size in pixels or CSS value */
  size?: number | string;
  /** Icon color - defaults to currentColor */
  color?: string;
  /** Stroke width for line icons */
  strokeWidth?: number | string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Additional CSS class */
  className?: string;
}

export const defaultIconProps: Partial<IconProps> = {
  size: 24,
  strokeWidth: 2,
  color: 'currentColor',
};
