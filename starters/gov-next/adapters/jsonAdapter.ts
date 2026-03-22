import type { GovLandingContent, GovLocale } from '@ivds/react/gov';

export type StarterLocale = GovLocale;

const LANDING_DATA_LOADERS: Record<StarterLocale, () => Promise<GovLandingContent>> = {
  fr: async () => (await import('../data/landing.fr.json')).default as GovLandingContent,
  en: async () => (await import('../data/landing.en.json')).default as GovLandingContent,
};

export async function loadLanding(locale: StarterLocale = 'fr'): Promise<GovLandingContent> {
  const loadData = LANDING_DATA_LOADERS[locale] ?? LANDING_DATA_LOADERS.fr;
  return loadData();
}
