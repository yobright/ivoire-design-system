import type { GovFooterSection } from '@ivds/react/gov';

export const SUPPORTED_LOCALES = ['fr', 'en'] as const;
export type StarterLocale = (typeof SUPPORTED_LOCALES)[number];

export const isStarterLocale = (value: string): value is StarterLocale =>
  SUPPORTED_LOCALES.includes(value as StarterLocale);

export interface StarterLocaleLabels {
  portalTitle: string;
  portalSubtitle: string;
  newsTitle: string;
  agendaTitle: string;
  servicesTitle: string;
  footerTitle: string;
  starterNavLabel: string;
  toolbarLinks: {
    landing: string;
    passport: string;
    opisms: string;
    switchLocale: string;
  };
}

export const STARTER_LABELS: Record<StarterLocale, StarterLocaleLabels> = {
  fr: {
    portalTitle: 'Portail officiel',
    portalSubtitle: "Republique de Cote d'Ivoire",
    newsTitle: 'Actualites',
    agendaTitle: 'Agenda',
    servicesTitle: 'Annuaire e-Services',
    footerTitle: 'Navigation institutionnelle',
    starterNavLabel: 'Navigation des templates starter',
    toolbarLinks: {
      landing: 'Landing',
      passport: 'Passeport',
      opisms: 'OPISMS',
      switchLocale: 'EN',
    },
  },
  en: {
    portalTitle: 'Official portal',
    portalSubtitle: "Republic of Cote d'Ivoire",
    newsTitle: 'News',
    agendaTitle: 'Agenda',
    servicesTitle: 'e-Services directory',
    footerTitle: 'Institutional navigation',
    starterNavLabel: 'Starter template navigation',
    toolbarLinks: {
      landing: 'Landing',
      passport: 'Passport',
      opisms: 'OPISMS',
      switchLocale: 'FR',
    },
  },
};

export function getFallbackFooterSections(): GovFooterSection[] {
  return [
    {
      id: 'primature',
      title: { fr: 'Primature', en: 'Prime Minister Office' },
      links: [
        { id: 'pm', href: '#', label: { fr: 'Premier Ministre', en: 'Prime Minister' } },
        { id: 'speech', href: '#', label: { fr: 'Discours', en: 'Speeches' } },
      ],
    },
    {
      id: 'news',
      title: { fr: 'Actualites', en: 'News' },
      links: [
        { id: 'politics', href: '#', label: { fr: 'Politique', en: 'Politics' } },
        { id: 'economy', href: '#', label: { fr: 'Economie', en: 'Economy' } },
      ],
    },
  ].map((section) => ({
    ...section,
    links: section.links.map((link) => ({
      ...link,
      label: {
        fr: link.label.fr,
        en: link.label.en,
      },
    })),
    title: {
      fr: section.title.fr,
      en: section.title.en,
    },
  }));
}

export function getLocaleSwitcherPath(locale: StarterLocale): string {
  return locale === 'fr' ? '/en' : '/fr';
}
