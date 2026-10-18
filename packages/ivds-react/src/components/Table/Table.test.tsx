import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

const cols = [
  { key: 'name', headerName: 'Nom', isSortable: true },
  { key: 'role', headerName: 'Role' },
];

const rows = [
  { id: 1, name: 'Alice', role: 'Dev' },
  { id: 2, name: 'Bob', role: 'Designer' },
];

describe('Table', () => {
  it('renders heading, columns and rows', () => {
    render(<Table cols={cols} rows={rows} heading="Team" />);
    expect(screen.getByText('Team')).toBeInTheDocument();
    expect(screen.getByText('Nom')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('renders sortable column button', () => {
    render(<Table cols={cols} rows={rows} />);
    expect(screen.getByRole('button', { name: /Trier Nom par ordre croissant/ })).toBeInTheDocument();
  });

  it('sorts rows on click', () => {
    render(<Table cols={cols} rows={rows} />);
    const sortBtn = screen.getByRole('button', { name: /Trier Nom par ordre croissant/ });
    fireEvent.click(sortBtn);
    const cells = screen.getAllByRole('cell');
    expect(cells[0]).toHaveTextContent('Alice');
  });

  it('exposes aria-sort on the active sortable header', () => {
    render(<Table cols={cols} rows={rows} />);
    fireEvent.click(screen.getByRole('button', { name: /Trier Nom par ordre croissant/ }));

    expect(screen.getByRole('columnheader', { name: /Nom/ })).toHaveAttribute('aria-sort', 'ascending');
    expect(screen.getByRole('button', { name: /Trier Nom par ordre decroissant/ })).toBeInTheDocument();
  });

  it('applies dense class', () => {
    const { container } = render(<Table cols={cols} rows={rows} dense />);
    expect(container.querySelector('.ivds-table--dense')).toBeInTheDocument();
  });

  it('applies striped class', () => {
    const { container } = render(<Table cols={cols} rows={rows} striped />);
    expect(container.querySelector('.ivds-table--striped')).toBeInTheDocument();
  });
});
