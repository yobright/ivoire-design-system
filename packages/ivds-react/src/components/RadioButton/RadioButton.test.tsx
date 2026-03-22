import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders with basic props', () => {
    render(<RadioButton name="test" value="option1" label="Option 1" />);
    const radio = screen.getByRole('radio');
    
    expect(radio).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(radio).toHaveAttribute('name', 'test');
    expect(radio).toHaveAttribute('value', 'option1');
  });

  it('handles controlled state', () => {
    const handleChange = jest.fn();
    render(
      <RadioButton 
        name="test" 
        value="option1" 
        checked={false} 
        onChange={handleChange} 
        label="Controlled" 
      />
    );
    const radio = screen.getByRole('radio');
    
    expect(radio).not.toBeChecked();
    
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalled();
  });

  it('handles uncontrolled state', () => {
    render(
      <RadioButton 
        name="test" 
        value="option1" 
        defaultChecked={true} 
        label="Uncontrolled" 
      />
    );
    const radio = screen.getByRole('radio');
    
    expect(radio).toBeChecked();
  });

  it('shows error state', () => {
    render(<RadioButton name="test" value="option1" error label="Error radio" />);
    const radio = screen.getByRole('radio');
    
    expect(radio).toHaveClass('ivds-radio-button--error');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('disables radio when disabled prop is true', () => {
    render(<RadioButton name="test" value="option1" disabled label="Disabled" />);
    const radio = screen.getByRole('radio');
    
    expect(radio).toBeDisabled();
    expect(radio).toHaveClass('ivds-radio-button--disabled');
  });

  it('shows required indicator', () => {
    render(<RadioButton name="test" value="option1" required label="Required" />);
    const label = screen.getByText('Required');
    
    expect(label).toHaveClass('ivds-radio-button-label--required');
  });

  it('renders children as label when no label prop', () => {
    render(
      <RadioButton name="test" value="option1">
        Child label
      </RadioButton>
    );
    
    expect(screen.getByLabelText('Child label')).toBeInTheDocument();
  });

  it('works in radio group', () => {
    const handleChange = jest.fn();
    render(
      <div>
        <RadioButton 
          name="group" 
          value="option1" 
          onChange={handleChange} 
          label="Option 1" 
        />
        <RadioButton 
          name="group" 
          value="option2" 
          onChange={handleChange} 
          label="Option 2" 
        />
      </div>
    );
    
    const radio1 = screen.getByLabelText('Option 1');
    const radio2 = screen.getByLabelText('Option 2');
    
    fireEvent.click(radio1);
    expect(handleChange).toHaveBeenCalledTimes(1);
    
    fireEvent.click(radio2);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});