import Foundation

@objc public class CapacitorAppInsights: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
