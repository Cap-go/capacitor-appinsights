# @capgo/capacitor-appinsights
 <a href="https://capgo.app/"><img src='https://raw.githubusercontent.com/Cap-go/capgo/main/assets/capgo_banner.png' alt='Capgo - Instant updates for capacitor'/></a>

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

## Install

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
