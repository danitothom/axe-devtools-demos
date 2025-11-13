import { playwrightTest } from '@axe-core/watcher';

const API_KEY = process.env.AAD_ADTD_PW_APIKEY!;

const { test, expect } = playwrightTest({
  axe: {
    apiKey: API_KEY
  },
  headless: false,
  channel: 'chromium'
});

export { test, expect };
