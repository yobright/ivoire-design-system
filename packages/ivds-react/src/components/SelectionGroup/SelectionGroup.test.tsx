import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SelectionGroup } from './SelectionGroup';

describe('SelectionGroup', () => {
  it('renders a fieldset when a legend is provided', () => {
    render(
      <SelectionGroup legend="Canaux" direction="horizontal">
        <label>
          <input type="checkbox" /> Email
        </label>
      </SelectionGroup>,
    );

    expect(screen.getByRole('group', { name: 'Canaux' })).toBeInTheDocument();
    expect(screen.getByText('Email').closest('.ivds-selection-group')).toHaveClass('ivds-selection-group--horizontal');
  });

  it('renders a plain group without a legend', () => {
    render(
      <SelectionGroup data-testid="selection-group">
        Option
      </SelectionGroup>,
    );

    expect(screen.getByTestId('selection-group')).toHaveClass('ivds-selection-group');
  });
});
