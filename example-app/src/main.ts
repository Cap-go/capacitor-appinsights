import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { CapacitorAppInsights } from 'capacitor-appinsights'
import { Capacitor } from '@capacitor/core'
import { partnerId, partnerKey } from './license'
import { CapacitorUsageStatsManager } from '@capgo/capacitor-android-usagestatsmanager'

// AppInsights configuration
const appInsightsConfig = {
  partnerId: partnerId,
  partnerKey: partnerKey,
  userId: 'user_capacitor_demo_app',
  deviceId: 'device_capacitor_demo_app_12987798',
  debugMode: true
}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>AppInsights SDK Demo</h1>
    
    <div class="card">
      <h3>Configuration</h3>
      <p><strong>Partner ID:</strong> ${appInsightsConfig.partnerId}</p>
      <p><strong>User ID:</strong> ${appInsightsConfig.userId}</p>
      <p><strong>Device ID:</strong> ${appInsightsConfig.deviceId}</p>
      <p><strong>Debug Mode:</strong> ${appInsightsConfig.debugMode}</p>
    </div>

    <div class="card">
      <h3>Permissions</h3>
      <button id="usage-stats-btn" type="button">Open Usage Stats Settings</button>
      <p style="font-size: 12px; color: #666; margin-top: 8px;">
        <em>Required for PACKAGE_USAGE_STATS permission</em>
      </p>
    </div>

    <div class="card">
      <h3>SDK Actions</h3>
      <button id="init-btn" type="button">Initialize SDK</button>
      <button id="set-user-btn" type="button">Set New User ID</button>
      <button id="get-state-btn" type="button">Get SDK State</button>
    </div>

    <div class="card">
      <h3>SDK Status</h3>
      <div id="status-display">
        <p><em>Click "Get SDK State" to see status</em></p>
      </div>
    </div>

    <div class="card">
      <h3>Console Log</h3>
      <div id="log-display" style="background: #f5f5f5; padding: 10px; border-radius: 4px; max-height: 200px; overflow-y: auto; font-family: monospace; font-size: 12px;">
        <p><em>Logs will appear here...</em></p>
      </div>
    </div>

    <p class="read-the-docs">
      Platform: ${Capacitor.getPlatform()} | Native: ${Capacitor.isNativePlatform()}
    </p>
  </div>
`

// Logging helper
const addLog = (message: string, type: 'info' | 'error' | 'success' = 'info') => {
  const logDisplay = document.getElementById('log-display')!
  const timestamp = new Date().toLocaleTimeString()
  const color = type === 'error' ? 'red' : type === 'success' ? 'green' : 'black'
  
  if (logDisplay.innerHTML.includes('<em>Logs will appear here...</em>')) {
    logDisplay.innerHTML = ''
  }
  
  logDisplay.innerHTML += `<div style="color: ${color}; margin-bottom: 4px;">[${timestamp}] ${message}</div>`
  logDisplay.scrollTop = logDisplay.scrollHeight
  console.log(`[AppInsights Demo] ${message}`)
}

// Open Usage Stats Settings
document.getElementById('usage-stats-btn')!.addEventListener('click', async () => {
  try {
    if (Capacitor.isNativePlatform()) {
      addLog('Opening Usage Stats settings...')
      await CapacitorUsageStatsManager.openUsageStatsSettings()
      addLog('✅ Usage Stats settings opened!', 'success')
    } else {
      addLog('⚠️ Usage Stats settings only available on Android', 'error')
    }
  } catch (error) {
    addLog(`❌ Failed to open Usage Stats settings: ${error}`, 'error')
  }
})

// Initialize SDK
document.getElementById('init-btn')!.addEventListener('click', async () => {
  try {
    addLog('Initializing AppInsights SDK...')
    await CapacitorAppInsights.init(appInsightsConfig)
    addLog('✅ SDK initialized successfully!', 'success')
  } catch (error) {
    addLog(`❌ Initialization failed: ${error}`, 'error')
  }
})

// Set new user ID
document.getElementById('set-user-btn')!.addEventListener('click', async () => {
  try {
    const newUserId = 'user_' + Math.random().toString(36).substr(2, 9)
    addLog(`Setting new user ID: ${newUserId}`)
    await CapacitorAppInsights.setUserId({ userId: newUserId })
    addLog('✅ User ID updated successfully!', 'success')
    
    // Update display
    const userIdElement = document.querySelector('p:nth-child(2)')
    if (userIdElement) {
      userIdElement.innerHTML = `<strong>User ID:</strong> ${newUserId}`
    }
  } catch (error) {
    addLog(`❌ Failed to set user ID: ${error}`, 'error')
  }
})

// Get SDK state
document.getElementById('get-state-btn')!.addEventListener('click', async () => {
  try {
    addLog('Getting SDK state...')
    const state = await CapacitorAppInsights.getState()
    addLog('✅ SDK state retrieved!', 'success')
    
    const statusDisplay = document.getElementById('status-display')!
    statusDisplay.innerHTML = `
      <p><strong>Init Completed:</strong> <span style="color: ${state.initCompleted ? 'green' : 'red'}">${state.initCompleted}</span></p>
      <p><strong>Job Scheduled:</strong> <span style="color: ${state.jobScheduled ? 'green' : 'red'}">${state.jobScheduled}</span></p>
      <p><strong>Permission Acquired:</strong> <span style="color: ${state.permissionAcquired ? 'green' : 'red'}">${state.permissionAcquired}</span></p>
    `
    
    addLog(`State: initCompleted=${state.initCompleted}, jobScheduled=${state.jobScheduled}, permissionAcquired=${state.permissionAcquired}`)
  } catch (error) {
    addLog(`❌ Failed to get state: ${error}`, 'error')
  }
})

// Initial log
addLog('AppInsights SDK Demo loaded successfully!')
addLog(`Platform: ${Capacitor.getPlatform()}, Native: ${Capacitor.isNativePlatform()}`)
