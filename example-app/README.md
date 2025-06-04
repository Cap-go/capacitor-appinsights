# AppInsights SDK Demo App

This is a demo application showcasing the Capacitor AppInsights plugin integration with the [Apptopia AppInsights SDK](https://github.com/apptopia/appinsights).

## Features

The demo app provides a comprehensive interface to test all SDK functionality:

- **SDK Initialization** - Initialize the PanelSDK with partner credentials
- **User ID Management** - Set and update user identifiers
- **State Monitoring** - Check SDK initialization and permission status
- **Real-time Logging** - View all SDK interactions in the browser console

## Setup

1. Create a `src/license.ts` file with your Apptopia credentials:
```typescript
export const partnerId = 'your_partner_id_here';
export const partnerKey = 'your_partner_key_here';
```

2. Install dependencies:
```bash
npm install
```

3. Build the plugin:
```bash
cd ..
npm run build
cd example-app
```

4. For Android testing:
```bash
npx cap add android
npx cap sync android
npx cap open android
```

## Usage

The demo app provides an interactive interface with the following buttons:

- **Initialize SDK** - Calls `PanelSDK.init()` with your credentials
- **Set New User ID** - Updates the user identifier via `setUserId()`
- **Get SDK State** - Retrieves current SDK status including permissions
- **Test Echo** - Simple connectivity test

## Configuration

The app uses the following demo configuration:
- **Partner ID**: From your license file
- **Partner Key**: From your license file  
- **User ID**: `user_capacitor_demo_app`
- **Device ID**: `device_capacitor_demo_app_12987798`
- **Debug Mode**: `true` (enables verbose logging)

## Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Platform Support

- ❌ **Web** - Not implemented
- ✅ **Android** - Full native SDK integration
- ❌ **iOS** - Not yet implemented

## SDK Integration

This demo showcases integration with the Apptopia AppInsights PanelSDK, which provides:
- Device usage statistics collection
- Background data collection every 2 hours
- Secure local storage and transmission
- PACKAGE_USAGE_STATS permission handling

For more information, see the [official AppInsights documentation](https://github.com/apptopia/appinsights). 