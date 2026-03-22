import { test, expect } from '@playwright/test';

test.describe('Button Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Button stories
    await page.goto('/iframe.html?id=components-button--default');
    await page.waitForLoadState('networkidle');
  });

  test('should render default button correctly', async ({ page }) => {
    const button = page.locator('[data-testid="button"]').first();
    await expect(button).toBeVisible();
    
    // Take screenshot for visual comparison
    await expect(page).toHaveScreenshot('button-default.png');
  });

  test('should render all button variants correctly', async ({ page }) => {
    // Navigate to the variants story
    await page.goto('/iframe.html?id=components-button--all-variants');
    await page.waitForLoadState('networkidle');
    
    // Take screenshot of all variants
    await expect(page).toHaveScreenshot('button-variants.png');
  });

  test('should render all button sizes correctly', async ({ page }) => {
    // Navigate to the sizes story
    await page.goto('/iframe.html?id=components-button--all-sizes');
    await page.waitForLoadState('networkidle');
    
    // Take screenshot of all sizes
    await expect(page).toHaveScreenshot('button-sizes.png');
  });

  test('should show hover state correctly', async ({ page }) => {
    const button = page.locator('[data-testid="button"]').first();
    
    // Hover over the button
    await button.hover();
    
    // Take screenshot of hover state
    await expect(page).toHaveScreenshot('button-hover.png');
  });

  test('should show focus state correctly', async ({ page }) => {
    const button = page.locator('[data-testid="button"]').first();
    
    // Focus the button
    await button.focus();
    
    // Take screenshot of focus state
    await expect(page).toHaveScreenshot('button-focus.png');
  });

  test('should render disabled state correctly', async ({ page }) => {
    // Navigate to the disabled story
    await page.goto('/iframe.html?id=components-button--disabled');
    await page.waitForLoadState('networkidle');
    
    // Take screenshot of disabled state
    await expect(page).toHaveScreenshot('button-disabled.png');
  });

  test('should render loading state correctly', async ({ page }) => {
    // Navigate to the loading story
    await page.goto('/iframe.html?id=components-button--loading');
    await page.waitForLoadState('networkidle');
    
    // Wait for loading animation to be visible
    await page.waitForSelector('.ivds-button--loading');
    
    // Take screenshot of loading state
    await expect(page).toHaveScreenshot('button-loading.png');
  });
});