import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Bright Kids/);
});

test('home link', async ({ page }) => {
  await page.goto('/');

  // Expect the navigation home link to be visible
  const nav = page.locator('nav');
  await expect(
    nav.getByRole('link', { name: 'Inicio - Header' })
  ).toBeVisible();
});

test('instagram link', async ({ page }) => {
  await page.goto('/');

  // Expect the Instagram link to be visible
  const nav = page.locator('nav');
  await expect(nav.getByRole('link', { name: 'Instagram' })).toBeVisible();
});

test('image alt text', async ({ page }) => {
  await page.goto('/');

  // Expect the image to have alt text
  const image = page.getByAltText(/welcome illustration/i);
  await expect(image).toHaveAttribute('alt', /welcome illustration/i);
});

test('carousel items', async ({ page }) => {
  await page.goto('/');

  // Expect the carousel to have at least 3 items
  const carouselItems = page.locator('.carousel-item');
  await expect(carouselItems).toHaveCount(3);

  // Check if each item has a title and content
  for (let i = 0; i < 3; i++) {
    const item = carouselItems.nth(i);
    await expect(item.getByRole('heading')).toBeVisible();
    await expect(item.getByText(/descubre más/i)).toBeVisible();
  }
});

test('student section', async ({ page }) => {
  await page.goto('/');

  // Expect at least one student section to be visible
  await expect(page.locator('.student-section').first()).toBeVisible();

  // Check if each student name is present on the page
  const students = ['Cynthia', 'Paula', 'Romina', 'Victoria', 'Diego', 'Alan'];
  for (const student of students) {
    await expect(page.getByText(student)).toBeVisible();
  }
});

test('video section', async ({ page }) => {
  await page.goto('/');

  // Expect the video section to be visible
  const videoSection = page.locator('#video');
  await expect(videoSection).toBeVisible();

  // Expect at least one video accordion to be present
  const videoAccordions = page.locator('details[name="video"]');
  await expect(videoAccordions.first()).toBeVisible();
});
