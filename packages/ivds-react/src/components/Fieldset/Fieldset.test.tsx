import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Fieldset } from './Fieldset';

describe('Fieldset', () => {
  it('groups related controls with legend, helper, and error text', () => {
    render(
      <Fieldset legend="Civilite" description="Choisissez une option" helperText="Une seule reponse" error="Selection requise">
        <input type="radio" id="mr" name="title" />
      </Fieldset>,
    );

    const group = screen.getByRole('group', { name: 'Civilite' });
    expect(group).toHaveClass('ivds-fieldset', 'ivds-fieldset--error');
    expect(group).toHaveAccessibleDescription('Choisissez une option Selection requise Une seule reponse');
    expect(screen.getByText('Selection requise')).toHaveAttribute('aria-live', 'polite');
  });
});
