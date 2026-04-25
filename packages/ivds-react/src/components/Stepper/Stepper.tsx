import React from 'react';
import { IconCheck } from '../../icons';
import { BaseComponentProps } from '../../utils/types';

export type StepState = 'available' | 'selected' | 'completed' | 'disabled';

export interface StepItem {
  label: string;
  state: StepState;
}

export interface StepperProps
  extends BaseComponentProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseComponentProps | 'children'> {
  steps: StepItem[];
  selectedStep?: number;
  small?: boolean;
  onStepClick?: (event: React.MouseEvent<HTMLButtonElement>, stepIndex: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  selectedStep,
  small = false,
  onStepClick,
  className = '',
  'data-testid': testId,
  ...props
}) => {
  const classes = ['ivds-stepper', small && 'ivds-stepper--small', className].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label="Progression" data-testid={testId} {...props}>
      {steps.map((step, idx) => {
        const isSelected = selectedStep === idx || step.state === 'selected';
        const stateClass = `ivds-stepper__circle--${step.state}`;

        const circleContent = step.state === 'completed' ? <IconCheck /> : idx + 1;

        const circle =
          step.state === 'available' || step.state === 'completed' ? (
            <button
              type="button"
              className={`ivds-stepper__circle ${stateClass}`}
              aria-current={isSelected ? 'step' : undefined}
              aria-label={`${step.label} \u2014 etape ${idx + 1} sur ${steps.length}`}
              onClick={(e) => onStepClick?.(e, idx)}
            >
              {circleContent}
            </button>
          ) : (
            <span
              className={`ivds-stepper__circle ${stateClass}`}
              aria-current={isSelected ? 'step' : undefined}
              aria-label={`${step.label} \u2014 etape ${idx + 1} sur ${steps.length}`}
            >
              {circleContent}
            </span>
          );

        return (
          <div key={step.label} className={['ivds-stepper__step', isSelected && 'ivds-stepper__step--selected'].filter(Boolean).join(' ')}>
            {circle}
            <span className="ivds-stepper__label">{step.label}</span>
          </div>
        );
      })}
    </nav>
  );
};

Stepper.displayName = 'Stepper';
