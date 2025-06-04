import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Astro Basics/);
});

test("get started link", async ({ page }) => {
  await page.goto("/");

  // Click the get started link.
  await page.getByRole("link", { name: "Read our docs" }).click();

  // Expects page to have a heading with the name of Astro Docs.
  await expect(page.getByRole("heading", { name: "Astro Docs" })).toBeVisible();
});
