import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stepper } from './Stepper';

const steps = [
  { label: 'Info', state: 'completed' as const },
  { label: 'Address', state: 'selected' as const },
  { label: 'Payment', state: 'available' as const },
  { label: 'Done', state: 'disabled' as const },
];

describe('Stepper', () => {
  it('renders all step labels', () => {
    render(<Stepper steps={steps} />);
    expect(screen.getByText('Info')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('renders clickable buttons for available/completed steps', () => {
    render(<Stepper steps={steps} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('fires onStepClick', () => {
    const onStepClick = jest.fn();
    render(<Stepper steps={steps} onStepClick={onStepClick} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(onStepClick).toHaveBeenCalledWith(expect.anything(), 0);
  });

  it('applies small variant', () => {
    const { container } = render(<Stepper steps={steps} small />);
    expect(container.querySelector('.ivds-stepper--small')).toBeInTheDocument();
  });

  it('has navigation landmark', () => {
    render(<Stepper steps={steps} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
