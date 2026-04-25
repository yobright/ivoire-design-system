import React, { useState } from 'react';
import { IconChevronDown } from '../../icons';
import { BaseComponentProps } from '../../utils/types';
import { useStableId } from '../../utils/useStableId';

export type AccordionSize = 'small' | 'medium' | 'large';

export interface AccordionProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  heading?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  initiallyOpen?: boolean;
  card?: boolean;
  size?: AccordionSize;
  closeButton?: boolean;
  closeButtonLabel?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  heading,
  headingLevel = 2,
  initiallyOpen = false,
  card = false,
  size = 'medium',
  closeButton = false,
  closeButtonLabel = 'Fermer',
  children,
  className = '',
  id,
  'data-testid': testId,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const accordionId = useStableId(id, 'ivds-accordion');
  const contentId = `${accordionId}-content`;
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  const classes = [
    'ivds-accordion',
    card && 'ivds-accordion--card',
    size !== 'medium' && `ivds-accordion--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} id={accordionId} data-testid={testId} {...props}>
      <HeadingTag style={{ margin: 0 }}>
        <button
          type="button"
          className="ivds-accordion__header"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span>{heading}</span>
          <span
            className={['ivds-accordion__header-icon', isOpen && 'ivds-accordion__header-icon--open']
              .filter(Boolean)
              .join(' ')}
            aria-hidden="true"
          >
            <IconChevronDown />
          </span>
        </button>
      </HeadingTag>
      {isOpen && (
        <>
          <div id={contentId} className="ivds-accordion__content" role="region" aria-labelledby={accordionId}>
            {children}
          </div>
          {closeButton && (
            <div className="ivds-accordion__close">
              <button type="button" className="ivds-accordion__header" onClick={() => setIsOpen(false)}>
                {closeButtonLabel}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Accordion.displayName = 'Accordion';
