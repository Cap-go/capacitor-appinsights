// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapgoCapacitorAppinsights",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapgoCapacitorAppinsights",
            targets: ["CapacitorAppInsightsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.1")
    ],
    targets: [
        .target(
            name: "CapacitorAppInsightsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorAppInsightsPlugin"),
        .testTarget(
            name: "CapacitorAppInsightsPluginTests",
            dependencies: ["CapacitorAppInsightsPlugin"],
            path: "ios/Tests/CapacitorAppInsightsPluginTests")
    ]
)
