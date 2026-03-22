import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  GovAgendaPanel,
  GovFlashTicker,
  GovHeader,
  GovLanguageSwitcher,
  GovNewsPanel,
  GovPrimaryNav,
  GovServiceDirectory,
  type GovAgendaItem,
  type GovFlashItem,
  type GovNavItem,
  type GovNewsItem,
  type GovServiceItem,
} from './index';

describe('Gov components', () => {
  it('switches language and triggers callback', () => {
    const onChange = jest.fn();
    render(<GovLanguageSwitcher locale="fr" onChange={onChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'EN' }));
    expect(onChange).toHaveBeenCalledWith('en');
  });

  it('uses localized aria labels by default', () => {
    render(<GovLanguageSwitcher locale="fr" />);
    expect(screen.getByRole('group', { name: 'Choix de langue' })).toBeInTheDocument();
  });

  it('renders primary nav and active item', () => {
    const navItems: GovNavItem[] = [
      { id: 'home', href: '#', label: { fr: 'Accueil', en: 'Home' } },
      {
        id: 'gov',
        href: '#',
        label: { fr: 'Gouvernement', en: 'Government' },
        children: [{ id: 'institutions', href: '#', label: { fr: 'Institutions', en: 'Institutions' } }],
      },
    ];

    render(
      <GovHeader
        locale="fr"
        title="Portail officiel"
        navItems={navItems}
        activeNavId="home"
      />,
    );

    expect(screen.getByRole('navigation', { name: 'Navigation principale' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Accueil' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Institutions' })).toBeInTheDocument();
  });

  it('renders flash ticker items', () => {
    const items: GovFlashItem[] = [
      {
        id: 'flash-1',
        category: 'flash',
        title: { fr: 'Message FR', en: 'Message EN' },
        publishedAt: '2026-02-19T10:00:00.000Z',
      },
    ];

    render(<GovFlashTicker items={items} locale="fr" />);
    expect(screen.getByText('Message FR')).toBeInTheDocument();
  });

  it('renders news excerpt and localized date', () => {
    const items: GovNewsItem[] = [
      {
        id: 'news-1',
        category: 'Politique',
        title: { fr: 'Titre FR', en: 'Title EN' },
        excerpt: { fr: 'Extrait FR', en: 'Excerpt EN' },
        href: '#',
        publishedAt: '2026-02-19T10:00:00.000Z',
      },
    ];

    render(<GovNewsPanel locale="fr" title="Actualites" items={items} />);
    expect(screen.getByText('Extrait FR')).toBeInTheDocument();
    expect(screen.getByText(/Politique/)).toBeInTheDocument();
  });

  it('renders agenda item date and location', () => {
    const items: GovAgendaItem[] = [
      {
        id: 'agenda-1',
        title: { fr: 'Conseil', en: 'Council' },
        href: '#',
        location: { fr: 'Abidjan', en: 'Abidjan' },
        startAt: '2026-02-19T10:00:00.000Z',
      },
    ];

    render(<GovAgendaPanel locale="fr" title="Agenda" items={items} />);
    expect(screen.getByText('Conseil')).toBeInTheDocument();
    expect(screen.getByText(/Abidjan/)).toBeInTheDocument();
  });

  it('renders service status classes and localized labels', () => {
    const items: GovServiceItem[] = [
      {
        id: 'service-1',
        code: 'passport',
        title: { fr: 'Passeport', en: 'Passport' },
        href: '#',
        status: 'maintenance',
      },
    ];

    render(<GovServiceDirectory locale="fr" title="Services" items={items} />);
    const badge = screen.getByText('Maintenance');
    expect(badge).toHaveClass('ivds-gov-service-directory__status--maintenance');
  });

  it('supports custom navigation aria label', () => {
    const navItems: GovNavItem[] = [{ id: 'home', href: '#', label: { fr: 'Accueil', en: 'Home' } }];
    render(
      <GovPrimaryNav
        items={navItems}
        locale="en"
        ariaLabel={{ fr: 'Navigation', en: 'Main menu' }}
      />,
    );

    expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument();
  });
});
