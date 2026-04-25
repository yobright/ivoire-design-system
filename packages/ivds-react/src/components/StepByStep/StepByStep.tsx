import React from 'react';
import { BaseComponentProps } from '../../utils/types';

export interface StepByStepItem {
  title: string;
  description?: React.ReactNode;
  key?: string;
}

export interface StepByStepProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children' | 'title'> {
  title?: string;
  helpText?: string;
  steps: StepByStepItem[];
  numberedList?: boolean;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const StepByStep: React.FC<StepByStepProps> = ({
  title,
  helpText,
  steps,
  numberedList = true,
  headingLevel = 2,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className={['ivds-step-by-step', className].filter(Boolean).join(' ')} data-testid={testId} {...props}>
      {title && <HeadingTag className="ivds-step-by-step__title">{title}</HeadingTag>}
      {helpText && <p className="ivds-step-by-step__help">{helpText}</p>}
      <ol className={['ivds-step-by-step__list', numberedList && 'ivds-step-by-step__list--numbered'].filter(Boolean).join(' ')}>
        {steps.map((step) => (
          <li key={step.key ?? step.title} className="ivds-step-by-step__item">
            <p className="ivds-step-by-step__item-title">{step.title}</p>
            {step.description && <p className="ivds-step-by-step__item-description">{step.description}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
};

StepByStep.displayName = 'StepByStep';
