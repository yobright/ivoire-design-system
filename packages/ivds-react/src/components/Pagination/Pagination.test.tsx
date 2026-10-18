import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('renders localized pagination controls', () => {
    render(<Pagination pageCount={4} pageIndex={1} />);

    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
    expect(screen.getByLabelText('Page actuelle, 2')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'Précédente' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Suivante' })).toBeInTheDocument();
  });

  it('calls onChange with selected page index', () => {
    const handleChange = jest.fn();
    render(<Pagination pageCount={4} pageIndex={0} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'Aller à la page 3' }));

    expect(handleChange).toHaveBeenCalledWith(expect.any(Object), 2);
  });

  it('uses links when pageHref is provided', () => {
    render(<Pagination pageCount={3} pageIndex={0} pageHref={(index) => `/page/${index + 1}`} language="en" />);

    expect(screen.getByRole('link', { name: 'Go to page 2' })).toHaveAttribute('href', '/page/2');
  });
});
