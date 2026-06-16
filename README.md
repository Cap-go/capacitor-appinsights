# @capgo/capacitor-appinsights
<a href="https://capgo.app/"><img src="https://capgo.app/readme-banner.svg?repo=Cap-go/capacitor-appinsights" alt="Capgo - Instant updates for Capacitor" /></a>

<div align="center">
  <h2><a href="https://capgo.app/?ref=plugin_appinsights"> ➡️ Get Instant updates for your App with Capgo</a></h2>
  <h2><a href="https://capgo.app/consulting/?ref=plugin_appinsights"> Missing a feature? We’ll build the plugin for you 💪</a></h2>
</div>
A wrapper around the https://github.com/apptopia/appinsights SDK

## Why Capacitor AppInsights?

The only Capacitor plugin for integrating the AppInsights SDK:

- **Market intelligence** - Access app store analytics and competitive data
- **User insights** - Track and analyze user behavior across platforms
- **SDK wrapper** - Clean JavaScript API for the native AppInsights SDKs
- **Cross-platform** - Works on iOS and Android

Essential for apps needing market intelligence, competitive analysis, and advanced analytics beyond standard tools.

## Documentation

The most complete doc is available here: https://capgo.app/docs/plugins/appinsights/

## Compatibility

| Plugin version | Capacitor compatibility | Maintained |
| -------------- | ----------------------- | ---------- |
| v8.\*.\*       | v8.\*.\*                | ✅          |
| v7.\*.\*       | v7.\*.\*                | On demand   |
| v6.\*.\*       | v6.\*.\*                | ❌          |
| v5.\*.\*       | v5.\*.\*                | ❌          |

> **Note:** The major version of this plugin follows the major version of Capacitor. Use the version that matches your Capacitor installation (e.g., plugin v8 for Capacitor 8). Only the latest major version is actively maintained.

## Install

You can use our AI-Assisted Setup to install the plugin. Add the Capgo skills to your AI tool using the following command:

```bash
npx skills add https://github.com/cap-go/capacitor-skills --skill capacitor-plugins
```

Then use the following prompt:

```text
Use the `capacitor-plugins` skill from `cap-go/capacitor-skills` to install the `@capgo/capacitor-appinsights` plugin in my project.
```

If you prefer Manual Setup, install the plugin by running the following commands and follow the platform-specific instructions below:

```bash
npm install @capgo/capacitor-appinsights
npx cap sync
```

## API

<docgen-index>

* [`init(...)`](#init)
* [`setUserId(...)`](#setuserid)
* [`getState()`](#getstate)
* [`getPluginVersion()`](#getpluginversion)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(options: { partnerId: string; partnerKey: string; }) => Promise<void>
```

Initialize the AppInsights SDK

| Param         | Type                                                    | Description                                  |
| ------------- | ------------------------------------------------------- | -------------------------------------------- |
| **`options`** | <code>{ partnerId: string; partnerKey: string; }</code> | Configuration options for SDK initialization |

--------------------


### setUserId(...)

```typescript
setUserId(options: { userId: string; }) => Promise<void>
```

Set or update the user ID after initialization

| Param         | Type                             | Description    |
| ------------- | -------------------------------- | -------------- |
| **`options`** | <code>{ userId: string; }</code> | User ID to set |

--------------------


### getState()

```typescript
getState() => Promise<PanelSDKState>
```

Get the current state of the SDK

**Returns:** <code>Promise&lt;<a href="#panelsdkstate">PanelSDKState</a>&gt;</code>

--------------------


### getPluginVersion()

```typescript
getPluginVersion() => Promise<{ version: string; }>
```

Get the native Capacitor plugin version

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

--------------------


### Interfaces


#### PanelSDKState

| Prop                     | Type                 |
| ------------------------ | -------------------- |
| **`initCompleted`**      | <code>boolean</code> |
| **`jobScheduled`**       | <code>boolean</code> |
| **`permissionAcquired`** | <code>boolean</code> |

</docgen-api>
