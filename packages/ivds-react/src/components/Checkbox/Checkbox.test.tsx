import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with basic props', () => {
    render(<Checkbox label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).toBeInTheDocument();
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('handles controlled state', () => {
    const handleChange = jest.fn();
    render(<Checkbox checked={true} onChange={handleChange} label="Controlled" />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).toBeChecked();
    
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  it('handles uncontrolled state', () => {
    render(<Checkbox defaultChecked={true} label="Uncontrolled" />);
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).toBeChecked();
    expect(checkbox).not.toBeDisabled();
  });

  it('shows required indicator', () => {
    render(<Checkbox required label="Required" />);
    const label = screen.getByText('Required');
    
    expect(label).toHaveClass('ivds-checkbox-label--required');
  });

  it('renders children as label when no label prop', () => {
    render(<Checkbox>Child label</Checkbox>);
    
    expect(screen.getByLabelText('Child label')).toBeInTheDocument();
  });
});
