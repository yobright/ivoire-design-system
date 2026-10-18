import { expect, test } from 'playwright/test';

test.describe('Documented IVDS patterns', () => {
  test('form validation pattern exposes summary, inline errors, and recovery', async ({ page }) => {
    await page.goto('/iframe.html?id=patterns-parcours-documentes--formulaire-validation');
    await page.getByRole('button', { name: 'Soumettre la demande' }).click();

    await expect(page.getByRole('alert')).toContainText('Corrigez le formulaire');
    await expect(page.getByText('Renseignez le nom complet.')).toBeVisible();
    await expect(page.getByText('Renseignez une adresse email.')).toBeVisible();

    await page.getByLabel('Nom complet').fill('Awa Traore');
    await page.getByLabel('Adresse email').fill('awa.traore@example.ci');
    await page.getByRole('button', { name: 'Soumettre la demande' }).click();

    await expect(page.getByRole('status')).toContainText('Formulaire valide');
  });

  test('application navigation pattern keeps a visible active state', async ({ page }) => {
    await page.goto('/iframe.html?id=patterns-parcours-documentes--navigation-application');

    await expect(page.getByRole('heading', { name: 'Tableau de bord' })).toBeVisible();
    await page
      .getByRole('navigation', { name: 'Navigation secondaire' })
      .getByRole('link', { name: 'Parametres' })
      .click();

    await expect(page.getByRole('heading', { name: 'Parametres' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Parametres' }).first()).toHaveAttribute('aria-current', 'page');
  });

  test('feedback pattern exposes loading, success, and error states', async ({ page }) => {
    await page.goto('/iframe.html?id=patterns-parcours-documentes--feedback-etats');

    await page.getByRole('button', { name: 'Lancer le traitement' }).click();
    await expect(page.getByText('Traitement en cours')).toBeVisible();
    await expect(page.getByText('Traitement termine')).toBeVisible();
    await expect(page.getByRole('status')).toContainText('Demande traitee');

    await page.getByRole('button', { name: 'Simuler une erreur' }).click();
    await expect(page.getByRole('alert')).toContainText('Piece manquante');
  });
});
