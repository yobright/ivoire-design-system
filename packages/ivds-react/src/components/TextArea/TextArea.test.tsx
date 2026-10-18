import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders a labelled textarea with rows', () => {
    render(<TextArea label="Message" rows={6} helperText="Soyez precis" />);

    const textarea = screen.getByRole('textbox', { name: 'Message' });
    expect(textarea.tagName).toBe('TEXTAREA');
    expect(textarea).toHaveAttribute('rows', '6');
    expect(textarea).toHaveAccessibleDescription('Soyez precis');
  });

  it('emits textarea change events', () => {
    const handleChange = jest.fn();
    render(<TextArea label="Commentaire" onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText('Commentaire'), { target: { value: 'Bonjour' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('Commentaire')).toHaveValue('Bonjour');
  });
});
