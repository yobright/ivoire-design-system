export async function loadLanding(locale = 'fr') {
  const response = await fetch(`./data/landing.${locale}.json`);
  if (!response.ok) {
    throw new Error(`Unable to load landing content for locale: ${locale}`);
  }
  return response.json();
}
