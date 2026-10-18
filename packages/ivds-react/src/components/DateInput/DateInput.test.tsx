import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  it('renders an accessible date input with safe defaults', () => {
    render(<DateInput label="Date de naissance" name="birthdate" />);

    const input = screen.getByLabelText('Date de naissance');
    expect(input).toHaveAttribute('type', 'date');
    expect(input).toHaveAttribute('autocomplete', 'off');
    expect(input).toHaveAttribute('spellcheck', 'false');
  });
});
