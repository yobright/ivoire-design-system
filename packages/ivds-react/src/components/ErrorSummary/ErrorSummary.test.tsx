import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorSummary } from './ErrorSummary';

describe('ErrorSummary', () => {
  it('announces errors and renders links to fields', () => {
    render(
      <ErrorSummary
        description="Deux champs doivent etre corriges."
        errors={[{ label: 'Email requis', href: '#email' }]}
      />,
    );

    const summary = screen.getByRole('alert');
    expect(summary).toHaveAttribute('aria-live', 'polite');
    expect(screen.getByRole('heading', { name: 'Corrigez les champs suivants' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email requis' })).toHaveAttribute('href', '#email');
  });

  it('renders button actions when no href is provided', () => {
    const handleClick = jest.fn();
    render(<ErrorSummary errors={[{ label: 'Nom requis', onClick: handleClick }]} />);

    fireEvent.click(screen.getByRole('button', { name: 'Nom requis' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
