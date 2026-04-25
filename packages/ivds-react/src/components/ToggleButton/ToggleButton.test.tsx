import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToggleButton } from './ToggleButton';

const noop = () => {};

describe('ToggleButton', () => {
  it('renders with label', () => {
    render(<ToggleButton label="Dark mode" checked={false} onChange={noop} />);
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });

  it('toggles checked state', () => {
    const onChange = jest.fn();
    render(<ToggleButton label="Toggle" checked={false} onChange={onChange} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onChange).toHaveBeenCalled();
  });

  it('renders checked state', () => {
    const { container } = render(<ToggleButton label="On" checked onChange={noop} />);
    expect(container.querySelector('.ivds-toggle-button__control--checked')).toBeInTheDocument();
  });

  it('supports disabled state', () => {
    render(<ToggleButton label="Disabled" checked={false} onChange={noop} disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
