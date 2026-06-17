import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.1.2:5050/');
  await page.getByPlaceholder('Num 1').click();
  await page.getByPlaceholder('Num 1').fill('10');
  await page.getByPlaceholder('Num 2').click();
  await page.getByPlaceholder('Num 2').fill('10');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.getByRole('button', { name: 'Check API Health' })).toBeVisible();
  await page.getByRole('button', { name: 'Check API Health' }).click();
  await page.getByPlaceholder('Num 1').click();
  await page.getByPlaceholder('Num 1').dblclick();
  await page.getByPlaceholder('Num 1').click();
  await page.getByPlaceholder('Num 1').click();
  await page.getByPlaceholder('Num 1').dblclick();
  await page.getByPlaceholder('Num 1').click();
  await page.getByPlaceholder('Num 1').fill('12');
  await page.locator('#operation').selectOption('sub');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await page.locator('#operation').selectOption('div');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await page.locator('#operation').selectOption('mul');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await page.getByPlaceholder('Num 2').click();
  await page.getByPlaceholder('Num 2').fill('100000');
  await page.getByRole('button', { name: 'Calculate' }).click();
});