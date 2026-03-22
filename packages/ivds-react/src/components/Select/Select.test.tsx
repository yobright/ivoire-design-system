import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from './Select';

describe('Select', () => {
  const options = [
    { label: 'Select one', value: '' },
    { label: 'Passport', value: 'passport' },
    { label: 'Vaccination', value: 'vaccination' },
  ];

  it('renders label and options', () => {
    render(<Select label="Service" options={options} defaultValue="" />);

    expect(screen.getByLabelText('Service')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Passport' })).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    const { container } = render(<Select label="Required" required options={options} defaultValue="" />);

    expect(container.querySelector('.ivds-select__required')).toBeInTheDocument();
  });

  it('renders helper text and error text', () => {
    const { rerender } = render(
      <Select label="Service" helperText="Helper text" options={options} defaultValue="" />,
    );

    expect(screen.getByText('Helper text')).toBeInTheDocument();

    rerender(<Select label="Service" error="Error text" options={options} defaultValue="" />);
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.getByLabelText('Service')).toHaveClass('ivds-select--error');
  });

  it('calls onChange when value changes', () => {
    const onChange = jest.fn();
    render(<Select label="Service" options={options} defaultValue="" onChange={onChange} />);

    fireEvent.change(screen.getByLabelText('Service'), { target: { value: 'passport' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('applies disabled and size classes', () => {
    render(<Select label="Service" options={options} disabled size="large" defaultValue="" />);

    const select = screen.getByLabelText('Service');
    expect(select).toBeDisabled();
    expect(select).toHaveClass('ivds-select--large');
  });
});
