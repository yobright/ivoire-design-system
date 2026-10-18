import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MegaMenu } from './MegaMenu';

const sections = [
  {
    id: 'news',
    label: 'Actualités',
    columns: [
      {
        title: "L'actualité",
        links: [
          { label: 'Ce qui change', href: '#changes' },
          { label: "Toute l'actualité", href: '#all-news' },
        ],
      },
      {
        title: 'Médias',
        links: [{ label: 'Vidéos', href: '#videos' }],
      },
    ],
  },
];

describe('MegaMenu', () => {
  it('opens and closes a desktop panel', () => {
    render(<MegaMenu sections={sections} />);

    fireEvent.click(screen.getByRole('button', { name: /Actualités/i }));

    expect(screen.getByRole('heading', { name: "L'actualité" })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ce qui change' })).toHaveAttribute('href', '#changes');

    fireEvent.click(screen.getByRole('button', { name: /Fermer/i }));

    expect(screen.queryByRole('heading', { name: "L'actualité" })).not.toBeInTheDocument();
  });

  it('renders the optional action link', () => {
    render(<MegaMenu sections={sections} action={{ label: 'Aides carburant', href: '#fuel' }} />);

    expect(screen.getByRole('link', { name: 'Aides carburant' })).toHaveAttribute('href', '#fuel');
  });
});
