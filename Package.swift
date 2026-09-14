// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapgoCapacitorAppinsights",
    platforms: [.iOS(.v16)],
    products: [
        .library(
            name: "CapgoCapacitorAppinsights",
            targets: ["CapacitorAppInsightsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "9.0.0-alpha.6")
    ],
    targets: [
        .target(
            name: "CapacitorAppInsightsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorAppInsightsPlugin"),
        .testTarget(
            name: "CapacitorAppInsightsPluginTests",
            dependencies: ["CapacitorAppInsightsPlugin"],
            path: "ios/Tests/CapacitorAppInsightsPluginTests")
    ]
)
