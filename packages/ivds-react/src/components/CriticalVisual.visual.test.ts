import { expect, test } from 'playwright/test';

const criticalStories = [
  ['text-input-states', 'react-champ-texte--etats'],
  ['select-error', 'react-sélecteur--etat-erreur'],
  ['modal-large', 'react-fenêtre-modale--grande'],
  ['table-default', 'react-table--par-defaut'],
  ['header-default', 'react-en-tête--par-defaut'],
  ['navigation-horizontal', 'react-navigation--horizontale'],
  ['alert-variants', 'react-alerte--variantes'],
];

test.describe('Critical component visual coverage', () => {
  for (const [snapshotName, storyId] of criticalStories) {
    test(`${snapshotName} story has a stable visual baseline`, async ({ page }) => {
      await page.goto(`/iframe.html?id=${storyId}`);
      await page.waitForLoadState('networkidle');
      await expect(page.locator('body')).toBeVisible();
      await expect(page).toHaveScreenshot(`${snapshotName}.png`, {
        fullPage: true,
      });
    });
  }
});
