import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://gpa-callculator.netlify.app/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(11)').click();
  const page1 = await page1Promise;
  await page2.goto('https://shoordaird.com/clicks/O0LhTFx2nd_giLJttFAuaN_W3oKlE6rv3YROCjZM_XU-ZIhShtqb6pdd4p0MJ7QgyXUe4_uipfMj1kColk3jDtgTf31i-Yx4-NY_jWaiYcgIwSa-gPWdrFo1uFwefL0FHlYds7oWeQ3ZfmNHPDvWUEPD8hNkp9W2JgF9o80TFZ7kpqajLyWcu-vHmA2TUQWQJfFyEtEW6huERxNhBc933QCw0gxcPzWoSgYYbtPo_8UZkmEQThKTM3bWMPsZgcdTAOLXSq71YSBWws42QwHJpKoSTSbZkRJ5yR3NRnR3ezkf8oWkVlmONPhj5jB-hNYzsTeLCHNtcix1wfKjtBNnPzI5Ey6Dax280FGXb33uSNCqLjOsWRrJZq0pY23t4IxnjTRfjj7u5I8zPjNEMtBTtuuo5gkmQAetDZ4cqcQRcKtyQ7nfgwx0Oo8wAEWQfo23PasMtFesxXM0_kTCHaLiDUeFQc3PcR6Ka0ec59BSbUG4LiWgiTfp8QakBCyL0rML-d9zhhsNiEAGTvmEASE1OW-zUOXSSrUkrAjWbDTe1og9XHjafzsP5dfztuWZNmsy?_z=7582568&b=21128958&lhe=1996&fs=0&cf=0&sw=1280&sh=720&sah=720&wx=10&wy=10&ww=1296&wh=788&cw=1280&wiw=1280&wih=720&wfc=4&pl=https%3A%2F%2Fgpa-callculator.netlify.app%2F&drf=&np=1&pt=0&nb=1&ng=1&ix=0&nw=1&tb=false&tzofs=60&btz=Africa%2FLagos&bto=-60&os=windows&os_version=10.0.0&is_mobile=false&browser_version=125.0.6422.26&js_build=8&sw_version=v1.348.0');
});