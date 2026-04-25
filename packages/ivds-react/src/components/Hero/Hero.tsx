import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export type HeroVariant = 'backgroundImage' | 'noImage';

export interface HeroProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  variant?: HeroVariant;
  centeredContent?: boolean;
  actions?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  imageSrc,
  imageAlt = '',
  title,
  text,
  variant,
  centeredContent = false,
  actions,
  children,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const resolvedVariant = variant ?? (imageSrc ? 'backgroundImage' : 'noImage');

  const classes = [
    'ivds-hero',
    resolvedVariant === 'noImage' && 'ivds-hero--no-image',
    centeredContent && 'ivds-hero--centered',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} data-testid={testId} {...props}>
      {imageSrc && resolvedVariant === 'backgroundImage' && (
        <>
          <img className="ivds-hero__image" src={imageSrc} alt={imageAlt} aria-hidden="true" loading="lazy" />
          <div className="ivds-hero__overlay" aria-hidden="true" />
        </>
      )}
      <div className="ivds-hero__content">
        {title && <h1 className="ivds-hero__title">{title}</h1>}
        {text && <p className="ivds-hero__text">{text}</p>}
        {children}
        {actions && <div className="ivds-hero__actions">{actions}</div>}
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
