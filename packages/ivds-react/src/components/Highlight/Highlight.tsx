import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export type HighlightType = 'highlight' | 'quote';
export type HighlightSize = 's' | 'm' | 'l';

export interface HighlightProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLElement>, keyof BaseComponentProps | 'children'> {
  text: string;
  type?: HighlightType;
  size?: HighlightSize;
  reference?: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  text,
  type = 'highlight',
  size = 'm',
  reference,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const classes = [
    'ivds-highlight',
    size !== 'm' && `ivds-highlight--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure className={classes} data-testid={testId} {...props}>
      <blockquote className="ivds-highlight__blockquote">
        <p className={['ivds-highlight__text', type === 'quote' && 'ivds-highlight__text--quote'].filter(Boolean).join(' ')}>
          {text}
        </p>
      </blockquote>
      {reference && <figcaption className="ivds-highlight__reference">&mdash;&thinsp;{reference}</figcaption>}
    </figure>
  );
};

Highlight.displayName = 'Highlight';
