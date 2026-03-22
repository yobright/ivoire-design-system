import type { GovLandingContent } from '@ivds/react/gov';
import type { StarterLocale } from './jsonAdapter';

export async function loadLandingFromCms(
  endpoint: string,
  locale: StarterLocale = 'fr',
): Promise<GovLandingContent> {
  const response = await fetch(`${endpoint}?locale=${locale}`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`CMS request failed with status ${response.status}`);
  }

  const raw = await response.json();

  return {
    locale,
    promo: raw.promo,
    navigation: raw.navigation,
    flash: raw.flash,
    news: raw.news,
    services: raw.services,
    agenda: raw.agenda,
    footerSections: raw.footerSections,
  };
}
