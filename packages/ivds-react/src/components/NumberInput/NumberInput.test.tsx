import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NumberInput } from './NumberInput';

describe('NumberInput', () => {
  it('renders a numeric input with increment controls', () => {
    render(<NumberInput label="Montant" defaultValue={2} min={0} max={5} unit="FCFA" />);

    const input = screen.getByLabelText('Montant');
    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveAttribute('inputmode', 'decimal');
    expect(screen.getByRole('button', { name: 'Diminuer la valeur' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Augmenter la valeur' })).toBeInTheDocument();
  });

  it('updates value and emits numeric changes', () => {
    const handleValueChange = jest.fn();
    render(<NumberInput label="Quantite" defaultValue={1} onValueChange={handleValueChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'Augmenter la valeur' }));

    expect(screen.getByLabelText('Quantite')).toHaveValue(2);
    expect(handleValueChange).toHaveBeenCalledWith(2);
  });
});
