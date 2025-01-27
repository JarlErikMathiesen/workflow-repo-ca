import { test, expect } from '@playwright/test';

test('when the first venue is clicked from the home page it should display venue details', async ({
  page,
}) => {
  // Go to the home page
  await page.goto('/index.html');

  // Wait for the new page to load and check its content
  await expect(page.locator('#venue-container > a:nth-child(1)')).toBeVisible();

  // Click on the first venue page
  await page.click('#venue-container > a:nth-child(1)');

  // Verify the venue details page has the correct heading
  await expect(page.locator('h1')).toContainText('Venue details');
});
