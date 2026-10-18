import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FileInput } from './FileInput';

describe('FileInput', () => {
  it('renders a labelled file input with helper text', () => {
    render(<FileInput label="Piece jointe" helperText="PDF uniquement" name="attachment" />);

    const input = screen.getByLabelText('Piece jointe');
    expect(input).toHaveAttribute('type', 'file');
    expect(input).toHaveAccessibleDescription('PDF uniquement');
    expect(screen.getByText('Aucun fichier sélectionné')).toBeInTheDocument();
  });

  it('lists selected files and calls onChange', () => {
    const handleChange = jest.fn();
    render(<FileInput label="Documents" multiple onChange={handleChange} />);
    const input = screen.getByLabelText('Documents');
    const files = [new File(['a'], 'a.pdf', { type: 'application/pdf' }), new File(['b'], 'b.pdf')];

    fireEvent.change(input, { target: { files } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(screen.getByText('a.pdf, b.pdf')).toBeInTheDocument();
    expect(screen.getByRole('list', { name: 'Fichiers sélectionnés' })).toBeInTheDocument();
  });
});
