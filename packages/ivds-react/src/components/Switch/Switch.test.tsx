import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders label and helper text', () => {
    render(<Switch label="Notifications" helperText="Enable updates" />);

    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Enable updates')).toHaveClass('ivds-switch__helper');
  });

  it('handles controlled state', () => {
    const onChange = jest.fn();
    render(<Switch label="Controlled" checked onChange={onChange} />);

    const input = screen.getByRole('checkbox');
    expect(input).toBeChecked();

    fireEvent.click(input);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('applies disabled and size classes', () => {
    const { container } = render(<Switch label="Disabled" disabled size="large" />);

    const input = screen.getByRole('checkbox');
    expect(input).toBeDisabled();

    const label = container.querySelector('.ivds-switch');
    expect(label).toHaveClass('ivds-switch--disabled');
    expect(label).toHaveClass('ivds-switch--large');
  });
});
