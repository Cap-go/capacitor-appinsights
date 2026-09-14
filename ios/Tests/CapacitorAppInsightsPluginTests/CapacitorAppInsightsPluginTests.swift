import XCTest
@testable import CapacitorAppInsightsPlugin

class CapacitorAppInsightsTests: XCTestCase {
    func testPluginMetadata() {
        let plugin = CapacitorAppInsightsPlugin()
        XCTAssertEqual(plugin.jsName, "CapacitorAppInsights")
        XCTAssertEqual(plugin.identifier, "CapacitorAppInsightsPlugin")
    }
}
