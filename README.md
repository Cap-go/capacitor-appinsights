# @capgo/capacitor-appinsights

A wrapper around the https://github.com/apptopia/appinsights SDK

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
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(options: { partnerId: string; partnerKey: string; userId: string; deviceId: string; debugMode: boolean; }) => Promise<void>
```

Initialize the AppInsights SDK

| Param         | Type                                                                                                          | Description                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| **`options`** | <code>{ partnerId: string; partnerKey: string; userId: string; deviceId: string; debugMode: boolean; }</code> | Configuration options for SDK initialization |

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


### Interfaces


#### PanelSDKState

| Prop                     | Type                 |
| ------------------------ | -------------------- |
| **`initCompleted`**      | <code>boolean</code> |
| **`jobScheduled`**       | <code>boolean</code> |
| **`permissionAcquired`** | <code>boolean</code> |

</docgen-api>
