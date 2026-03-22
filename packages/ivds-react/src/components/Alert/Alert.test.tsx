import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders default alert variant', () => {
    render(<Alert>Body</Alert>);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('ivds-alert');
    expect(alert).toHaveClass('ivds-alert--info');
    expect(screen.getByText('Body')).toBeInTheDocument();
  });

  it('renders title and icon', () => {
    render(
      <Alert variant="warning" title="Attention" icon="!">
        Content
      </Alert>,
    );

    expect(screen.getByText('Attention')).toHaveClass('ivds-alert__title');
    expect(screen.getByText('!')).toHaveClass('ivds-alert__icon');
    expect(screen.getByRole('alert')).toHaveClass('ivds-alert--warning');
  });

  it('applies custom class and test id', () => {
    render(
      <Alert className="custom-alert" data-testid="alert">
        Content
      </Alert>,
    );

    expect(screen.getByTestId('alert')).toHaveClass('custom-alert');
  });
});
