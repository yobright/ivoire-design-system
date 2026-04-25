import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export type LogoSize = 'small' | 'medium' | 'large' | 'full';

export interface LogoProps
  extends BaseComponentProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof BaseComponentProps | 'children'> {
  src: string;
  alt: string;
  size?: LogoSize;
  title?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  size = 'medium',
  title,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const classes = ['ivds-logo', `ivds-logo--${size}`, className].filter(Boolean).join(' ');

  return <img className={classes} src={src} alt={alt} title={title} data-testid={testId} {...props} />;
};

Logo.displayName = 'Logo';
