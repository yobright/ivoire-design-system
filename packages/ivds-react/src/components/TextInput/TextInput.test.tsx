import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders with basic props', () => {
    render(<TextInput placeholder="Enter text" />);
    const input = screen.getByRole('textbox');
    
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter text');
    expect(input).toHaveClass('ivds-text-input');
  });

  it('renders with label', () => {
    render(<TextInput label="Username" />);
    
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<TextInput label="Email" required />);
    const label = screen.getByText('Email');
    
    expect(label).toHaveClass('ivds-text-input-label--required');
  });

  it('handles controlled input', () => {
    const handleChange = jest.fn();
    render(<TextInput value="test" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    expect(input).toHaveValue('test');
    
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error state', () => {
    render(<TextInput error errorText="This field is required" />);
    const input = screen.getByRole('textbox');
    
    expect(input).toHaveClass('ivds-text-input--error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('shows success state', () => {
    render(<TextInput success />);
    const input = screen.getByRole('textbox');
    
    expect(input).toHaveClass('ivds-text-input--success');
  });

  it('shows helper text', () => {
    render(<TextInput helperText="Enter your full name" />);
    
    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<TextInput size="large" />);
    const input = screen.getByRole('textbox');
    
    expect(input).toHaveClass('ivds-text-input--large');
  });

  it('disables input when disabled prop is true', () => {
    render(<TextInput disabled />);
    const input = screen.getByRole('textbox');
    
    expect(input).toBeDisabled();
  });
});