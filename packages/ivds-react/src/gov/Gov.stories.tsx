import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '@ivds/core/gov';
import {
  GovAgendaPanel,
  GovFlashTicker,
  GovHeader,
  GovMegaFooter,
  GovNewsPanel,
  GovServiceDirectory,
  GovShell,
  GovTopPromo,
  type GovAgendaItem,
  type GovFlashItem,
  type GovFooterSection,
  type GovLocale,
  type GovNavItem,
  type GovNewsItem,
  type GovServiceItem,
} from './index';

const navItems: GovNavItem[] = [
  { id: 'home', href: '#', label: { fr: 'Accueil', en: 'Home' } },
  {
    id: 'gov',
    href: '#',
    label: { fr: 'Gouvernement', en: 'Government' },
    children: [
      { id: 'institutions', href: '#', label: { fr: 'Institutions', en: 'Institutions' } },
      { id: 'cabinet', href: '#', label: { fr: 'Cabinet', en: 'Cabinet' } },
    ],
  },
  { id: 'services', href: '#', label: { fr: 'e-Services', en: 'e-Services' } },
  { id: 'news', href: '#', label: { fr: 'Actualités', en: 'News' } },
  { id: 'agenda', href: '#', label: { fr: 'Agenda', en: 'Agenda' } },
];

const flashItems: GovFlashItem[] = [
  {
    id: 'f1',
    category: 'flash',
    title: {
      fr: 'Renforcement de la sécurité routière: nouvelles mesures annoncées.',
      en: 'Road safety enforcement: new measures announced.',
    },
    href: '#',
    publishedAt: '2026-02-19T10:00:00.000Z',
  },
  {
    id: 'f2',
    category: 'info',
    title: {
      fr: 'Lancement du portail e-services unifié.',
      en: 'Unified e-services portal launched.',
    },
    href: '#',
    publishedAt: '2026-02-18T08:00:00.000Z',
  },
];

const newsItems: GovNewsItem[] = [
  {
    id: 'n1',
    category: 'Politique',
    title: {
      fr: 'Coopération internationale: accord stratégique signé.',
      en: 'International cooperation: strategic agreement signed.',
    },
    href: '#',
    publishedAt: '2026-02-19T08:00:00.000Z',
  },
  {
    id: 'n2',
    category: 'e-Services',
    title: {
      fr: 'Nouveau guichet numérique pour les démarches administratives.',
      en: 'New digital one-stop shop for administrative procedures.',
    },
    href: '#',
    publishedAt: '2026-02-18T08:00:00.000Z',
  },
];

const agendaItems: GovAgendaItem[] = [
  {
    id: 'a1',
    title: { fr: 'Conseil des ministres', en: 'Council of ministers' },
    href: '#',
    location: { fr: 'Abidjan', en: 'Abidjan' },
    startAt: '2026-02-21T08:00:00.000Z',
  },
  {
    id: 'a2',
    title: { fr: 'Forum numérique', en: 'Digital forum' },
    href: '#',
    location: { fr: 'Yamoussoukro', en: 'Yamoussoukro' },
    startAt: '2026-02-25T08:00:00.000Z',
  },
];

const serviceItems: GovServiceItem[] = [
  {
    id: 's1',
    code: 'passport',
    title: { fr: 'Demande de passeport officiel', en: 'Official passport request' },
    href: '#',
    icon: '🛂',
    status: 'available',
  },
  {
    id: 's2',
    code: 'opisms',
    title: { fr: 'Carnet de vaccination électronique', en: 'Electronic vaccination booklet' },
    href: '#',
    icon: '💉',
    status: 'maintenance',
  },
  {
    id: 's3',
    code: 'justice',
    title: { fr: 'Plateforme e-Justice', en: 'e-Justice platform' },
    href: '#',
    icon: '⚖',
    status: 'coming-soon',
  },
];

const footerSections: GovFooterSection[] = [
  {
    id: 'primature',
    title: { fr: 'Primature', en: 'Prime Minister Office' },
    links: [
      { id: 'pm', href: '#', label: { fr: 'Premier Ministre', en: 'Prime Minister' } },
      { id: 'speeches', href: '#', label: { fr: 'Discours', en: 'Speeches' } },
    ],
  },
  {
    id: 'government',
    title: { fr: 'Gouvernement', en: 'Government' },
    links: [
      { id: 'inst', href: '#', label: { fr: 'Institutions', en: 'Institutions' } },
      { id: 'members', href: '#', label: { fr: 'Membres', en: 'Members' } },
    ],
  },
  {
    id: 'news',
    title: { fr: 'Actualités', en: 'News' },
    links: [
      { id: 'pol', href: '#', label: { fr: 'Politique', en: 'Politics' } },
      { id: 'eco', href: '#', label: { fr: 'Économie', en: 'Economy' } },
    ],
  },
  {
    id: 'publications',
    title: { fr: 'Publications', en: 'Publications' },
    links: [
      { id: 'docs', href: '#', label: { fr: 'Documents', en: 'Documents' } },
      { id: 'press', href: '#', label: { fr: 'Communiqués', en: 'Press releases' } },
    ],
  },
];

function GovLandingTemplate({ locale }: { locale: GovLocale }): JSX.Element {
  return (
    <GovShell locale={locale}>
      <GovTopPromo
        title={
          locale === 'fr'
            ? "Portail officiel du Gouvernement de Côte d'Ivoire"
            : 'Official portal of the Government of Côte d\'Ivoire'
        }
        subtitle={locale === 'fr' ? 'Modèle IVDS V1 - Landing gouvernementale' : 'IVDS V1 template - Government landing'}
        ctaLabel={locale === 'fr' ? 'Écrire au Gouvernement' : 'Write to Government'}
      />
      <GovFlashTicker items={flashItems} locale={locale} />
      <GovHeader
        locale={locale}
        title={locale === 'fr' ? 'Portail officiel' : 'Official Portal'}
        subtitle={locale === 'fr' ? "République de Côte d'Ivoire" : "Republic of Côte d'Ivoire"}
        navItems={navItems}
        activeNavId="home"
      />
      <section className="ivds-gov-main-grid">
        <GovNewsPanel title={locale === 'fr' ? 'Actualités' : 'News'} locale={locale} items={newsItems} />
        <GovAgendaPanel title="Agenda" locale={locale} items={agendaItems} />
      </section>
      <GovServiceDirectory
        title={locale === 'fr' ? 'Annuaire e-Services' : 'e-Services Directory'}
        locale={locale}
        items={serviceItems}
      />
      <GovMegaFooter
        title={locale === 'fr' ? 'Navigation institutionnelle' : 'Institutional navigation'}
        locale={locale}
        sections={footerSections}
      />
    </GovShell>
  );
}

const meta: Meta<typeof GovShell> = {
  title: "React/Gov/Page d'accueil",
  component: GovShell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
      source: {
        code: `// React snippet\n<GovShell locale="fr">\n  <GovTopPromo title="Portail officiel" />\n  <GovFlashTicker items={flashItems} locale="fr" />\n  <GovHeader locale="fr" title="Portail officiel" navItems={navItems} />\n</GovShell>\n\n<!-- HTML snippet -->\n<main class="ivds-gov-shell" lang="fr">\n  <section class="ivds-gov-top-promo">...</section>\n  <section class="ivds-gov-flash-ticker">...</section>\n  <header class="ivds-gov-header">...</header>\n</main>`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Francais: Story = {
  render: () => <GovLandingTemplate locale="fr" />,
};

export const Anglais: Story = {
  render: () => <GovLandingTemplate locale="en" />,
};
