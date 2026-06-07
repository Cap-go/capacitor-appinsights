import type { CapacitorConfig } from '@capacitor/cli';
import pkg from './package.json';

const config: CapacitorConfig = {
  appId: 'app.capgo.appinsights',
  appName: 'App Insights Example',
  webDir: 'dist',
  plugins: {
    CapacitorUpdater: {
      appId: 'app.capgo.appinsights',
      autoUpdate: true,
      autoSplashscreen: true,
      directUpdate: 'always',
      defaultChannel: 'production',
      version: pkg.version,
    },
  },
};

export default config;
