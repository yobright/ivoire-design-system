import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TimeInput } from './TimeInput';

describe('TimeInput', () => {
  it('renders a time input with numeric input hints', () => {
    render(<TimeInput label="Heure de rendez-vous" />);

    const input = screen.getByLabelText('Heure de rendez-vous');
    expect(input).toHaveAttribute('type', 'time');
    expect(input).toHaveAttribute('autocomplete', 'off');
    expect(input).toHaveAttribute('inputmode', 'numeric');
    expect(input).toHaveAttribute('spellcheck', 'false');
  });
});
