import { WebPlugin } from '@capacitor/core';

import type { CapacitorAppInsightsPlugin, PanelSDKState } from './definitions';

export class CapacitorAppInsightsWeb extends WebPlugin implements CapacitorAppInsightsPlugin {
  init(_options: {
    partnerId: string;
    partnerKey: string;
    userId: string;
    deviceId: string;
    debugMode: boolean;
  }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  setUserId(_options: { userId: string }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getState(): Promise<PanelSDKState> {
    throw new Error('Method not implemented.');
  }

  async getPluginVersion(): Promise<{ version: string }> {
    return { version: 'web' };
  }
}
