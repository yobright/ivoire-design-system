import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PhoneInput } from './PhoneInput';

describe('PhoneInput', () => {
  it('renders a telephone input with mobile-friendly defaults', () => {
    render(<PhoneInput label="Telephone" />);

    const input = screen.getByLabelText('Telephone');
    expect(input).toHaveAttribute('type', 'tel');
    expect(input).toHaveAttribute('autocomplete', 'tel');
    expect(input).toHaveAttribute('inputmode', 'tel');
    expect(input).toHaveAttribute('spellcheck', 'false');
  });
});
