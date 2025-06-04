import { registerPlugin } from '@capacitor/core';

import type { CapacitorAppInsightsPlugin } from './definitions';

const CapacitorAppInsights = registerPlugin<CapacitorAppInsightsPlugin>('CapacitorAppInsights', {
  web: () => import('./web').then((m) => new m.CapacitorAppInsightsWeb()),
});

export * from './definitions';
export { CapacitorAppInsights };
