import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Section } from './Section';

describe('Section', () => {
  it('renders contained content with variant classes', () => {
    render(
      <Section variant="accent" contentClassName="custom-content" aria-label="Actualites">
        Contenu
      </Section>,
    );

    const section = screen.getByRole('region', { name: 'Actualites' });
    expect(section).toHaveClass('ivds-section', 'ivds-section--accent');
    expect(section.querySelector('.ivds-section__content')).toHaveClass('custom-content');
  });

  it('can render uncontained content', () => {
    render(
      <Section contained={false} data-testid="section">
        Direct
      </Section>,
    );

    expect(screen.getByTestId('section').querySelector('.ivds-section__content')).not.toBeInTheDocument();
  });
});
