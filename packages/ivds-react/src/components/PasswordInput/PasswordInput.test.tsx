import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PasswordInput } from './PasswordInput';

describe('PasswordInput', () => {
  it('renders a password input with secure defaults', () => {
    render(<PasswordInput label="Mot de passe" />);

    const input = screen.getByLabelText('Mot de passe');
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toHaveAttribute('autocomplete', 'current-password');
    expect(input).toHaveAttribute('spellcheck', 'false');
  });

  it('toggles password visibility', () => {
    render(<PasswordInput label="Secret" />);

    fireEvent.click(screen.getByRole('button', { name: 'Afficher le mot de passe' }));
    expect(screen.getByLabelText('Secret')).toHaveAttribute('type', 'text');
    expect(screen.getByRole('button', { name: 'Masquer le mot de passe' })).toBeInTheDocument();
  });
});
