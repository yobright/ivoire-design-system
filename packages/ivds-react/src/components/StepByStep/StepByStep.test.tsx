import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StepByStep } from './StepByStep';

const steps = [
  { title: 'Step 1', description: 'Do this first' },
  { title: 'Step 2', description: 'Then this' },
];

describe('StepByStep', () => {
  it('renders title and steps', () => {
    render(<StepByStep title="How to" steps={steps} />);
    expect(screen.getByText('How to')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });

  it('renders descriptions', () => {
    render(<StepByStep steps={steps} />);
    expect(screen.getByText('Do this first')).toBeInTheDocument();
  });

  it('renders help text', () => {
    render(<StepByStep steps={steps} helpText="Follow in order" />);
    expect(screen.getByText('Follow in order')).toBeInTheDocument();
  });

  it('renders numbered list class', () => {
    const { container } = render(<StepByStep steps={steps} numberedList />);
    expect(container.querySelector('.ivds-step-by-step__list--numbered')).toBeInTheDocument();
  });
});
