import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Bright Kids/);
});

test("home link", async ({ page }) => {
  await page.goto("/");

  // Expect the navigation home link to be visible
  const nav = page.locator("nav");
  await expect(
    nav.getByRole("link", { name: "Inicio - Header" })
  ).toBeVisible();
});

test("instagram link", async ({ page }) => {
  await page.goto("/");

  // Expect the Instagram link to be visible
  const nav = page.locator("nav");
  await expect(nav.getByRole("link", { name: "Instagram" })).toBeVisible();
});

test("image alt text", async ({ page }) => {
  await page.goto("/");

  // Expect the image to have alt text
  const image = page.locator("img[alt]");
  await expect(image).toHaveAttribute("alt", /welcome illustration/i);
});
