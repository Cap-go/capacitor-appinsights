import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorAppInsightsPlugin)
public class CapacitorAppInsightsPlugin: CAPPlugin, CAPBridgedPlugin {
    private let pluginVersion: String = "8.0.15"
    public let identifier = "CapacitorAppInsightsPlugin"
    public let jsName = "CapacitorAppInsights"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "init", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "setUserId", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getState", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getPluginVersion", returnType: CAPPluginReturnPromise)
    ]

    @objc func getPluginVersion(_ call: CAPPluginCall) {
        call.resolve(["version": self.pluginVersion])
    }

    @objc func `init`(_ call: CAPPluginCall) {
        call.reject("AppInsights SDK is Android-only and not supported on iOS.")
    }

    @objc func setUserId(_ call: CAPPluginCall) {
        call.reject("AppInsights SDK is Android-only and not supported on iOS.")
    }

    @objc func getState(_ call: CAPPluginCall) {
        call.reject("AppInsights SDK is Android-only and not supported on iOS.")
    }

}
