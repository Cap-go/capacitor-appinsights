export interface PanelSDKState {
  initCompleted: boolean; // SDK initialization status
  jobScheduled: boolean; // Background job scheduling status
  permissionAcquired: boolean; // Required permissions status
}

export interface CapacitorAppInsightsPlugin {
  /**
   * Initialize the AppInsights SDK
   * @param options Configuration options for SDK initialization
   */
  init(options: {
    partnerId: string; // Provided by our business unit
    partnerKey: string; // Provided by our business unit
  }): Promise<void>;

  /**
   * Set or update the user ID after initialization
   * @param options User ID to set
   */
  setUserId(options: { userId: string }): Promise<void>;

  /**
   * Get the current state of the SDK
   * @returns Promise resolving to the current SDK state
   */
  getState(): Promise<PanelSDKState>;

  /**
   * Get the native Capacitor plugin version
   *
   * @returns {Promise<{ id: string }>} an Promise with version for this device
   * @throws An error if the something went wrong
   */
  getPluginVersion(): Promise<{ version: string }>;
}
