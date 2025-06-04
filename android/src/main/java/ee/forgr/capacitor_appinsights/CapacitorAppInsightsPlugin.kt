package ee.forgr.capacitor_appinsights

import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.appinsights.PanelSDK
import com.appinsights.PanelSDKState

@CapacitorPlugin(name = "CapacitorAppInsights")
class CapacitorAppInsightsPlugin : Plugin() {
    
    companion object {
        private const val TAG = "CapacitorAppInsights"
    }

    @PluginMethod
    fun init(call: PluginCall) {
        try {
            val partnerId = call.getString("partnerId")
            val partnerKey = call.getString("partnerKey")

            // Validate required parameters
            if (partnerId.isNullOrEmpty()) {
                call.reject("partnerId is required")
                return
            }
            if (partnerKey.isNullOrEmpty()) {
                call.reject("partnerKey is required")
                return
            }

            Log.d(TAG, "Initializing PanelSDK with partnerId: $partnerId")
            
            // Initialize the PanelSDK according to the documentation
            PanelSDK.init(
                context,
                partnerId,
                partnerKey,
            )

            Log.d(TAG, "PanelSDK initialized successfully")

            call.resolve()
        } catch (e: Exception) {
            Log.e(TAG, "Failed to initialize PanelSDK: ${e.message}", e)
            call.reject("Failed to initialize PanelSDK: ${e.message}", e)
        }
    }

    @PluginMethod
    fun setUserId(call: PluginCall) {
        try {
            val userId = call.getString("userId")
            
            if (userId.isNullOrEmpty()) {
                call.reject("userId is required")
                return
            }

            Log.d(TAG, "Setting user ID: $userId")
            PanelSDK.setUserId(userId)
            
            call.resolve()
        } catch (e: Exception) {
            Log.e(TAG, "Failed to set user ID: ${e.message}", e)
            call.reject("Failed to set user ID: ${e.message}", e)
        }
    }

    @PluginMethod
    fun getState(call: PluginCall) {
        try {
            val state = PanelSDK.getState(this.context)
            
            Log.d(TAG, "SDK State - initCompleted: ${state.initCompleted}, " +
                      "jobScheduled: ${state.jobScheduled}, " +
                      "permissionAcquired: ${state.permissionAcquired}")
            
            val ret = JSObject().apply {
                put("initCompleted", state.initCompleted)
                put("jobScheduled", state.jobScheduled)
                put("permissionAcquired", state.permissionAcquired)
            }
            
            call.resolve(ret)
        } catch (e: Exception) {
            Log.e(TAG, "Failed to get SDK state: ${e.message}", e)
            call.reject("Failed to get SDK state: ${e.message}", e)
        }
    }
} 