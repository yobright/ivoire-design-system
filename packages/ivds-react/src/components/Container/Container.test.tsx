import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from './Container';

describe('Container', () => {
  it('renders size, flush, and header alignment classes', () => {
    render(
      <Container size="wide" flush alignWithHeader data-testid="container">
        Contenu
      </Container>,
    );

    expect(screen.getByTestId('container')).toHaveClass(
      'ivds-container',
      'ivds-container--wide',
      'ivds-container--flush',
      'ivds-container--align-with-header',
    );
  });

  it('supports custom max width and element type', () => {
    render(
      <Container as="main" maxWidth="72rem">
        Page
      </Container>,
    );

    expect(screen.getByRole('main')).toHaveStyle({ '--ivds-container-max-width': '72rem' });
  });
});
