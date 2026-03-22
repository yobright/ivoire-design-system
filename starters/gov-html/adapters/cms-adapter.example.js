/**
 * Example adapter for plugging a CMS/API source.
 * Replace endpoint and mapping logic to feed IVDS gov contracts.
 */
export async function loadLandingFromCms({ endpoint, locale = 'fr' }) {
  const response = await fetch(`${endpoint}?locale=${locale}`);
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
