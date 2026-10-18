import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Columns } from './Columns';

describe('Columns', () => {
  it('renders responsive columns with custom layout tokens', () => {
    render(
      <Columns columns={3} gap={24} minColumnWidth="16rem" dense data-testid="columns">
        <div>Alpha</div>
        <div>Beta</div>
      </Columns>,
    );

    const columns = screen.getByTestId('columns');
    expect(columns).toHaveClass('ivds-columns', 'ivds-columns--responsive', 'ivds-columns--dense');
    expect(columns).toHaveStyle({
      '--ivds-columns-count': '3',
      '--ivds-columns-gap': '24px',
      '--ivds-columns-min-width': '16rem',
    });
  });

  it('supports custom semantic elements', () => {
    render(
      <Columns as="section" aria-label="Services">
        Content
      </Columns>,
    );

    expect(screen.getByRole('region', { name: 'Services' })).toHaveClass('ivds-columns');
  });
});
