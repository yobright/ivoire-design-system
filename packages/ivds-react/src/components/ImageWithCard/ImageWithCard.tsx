import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export type ImageWithCardLayout = 'hover' | 'split';
export type ImageWithCardAlignment = 'left' | 'right';
export type ImageWithCardColor = 'primary' | 'secondary' | 'tertiary' | 'plain';

export interface ImageWithCardProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  src: string;
  imgAlt?: string;
  fullWidth?: boolean;
  cardAlignment?: ImageWithCardAlignment;
  cardLayout?: ImageWithCardLayout;
  color?: ImageWithCardColor;
}

export const ImageWithCard: React.FC<ImageWithCardProps> = ({
  src,
  imgAlt = '',
  fullWidth = false,
  cardAlignment = 'left',
  cardLayout,
  children,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const classes = [
    'ivds-image-with-card',
    fullWidth && 'ivds-image-with-card--full-width',
    cardLayout === 'split' && 'ivds-image-with-card--split',
    cardAlignment === 'right' && 'ivds-image-with-card--right',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} data-testid={testId} {...props}>
      <img className="ivds-image-with-card__image" src={src} alt={imgAlt} loading="lazy" />
      {children && <div className="ivds-image-with-card__card">{children}</div>}
    </div>
  );
};

ImageWithCard.displayName = 'ImageWithCard';
