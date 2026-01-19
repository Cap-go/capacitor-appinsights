// swift-tools-version: 5.9
import PackageDescription

// DO NOT MODIFY THIS FILE - managed by Capacitor CLI commands
let package = Package(
    name: "CapApp-SPM",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapApp-SPM",
            targets: ["CapApp-SPM"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", exact: "8.0.1"),
        .package(name: "CapgoCapacitorAndroidUsagestatsmanager", path: "../../../node_modules/.bun/@capgo+capacitor-android-usagestatsmanager@7.2.0+15e98482558ccfe6/node_modules/@capgo/capacitor-android-usagestatsmanager"),
        .package(name: "CapacitorAppinsights", path: "../../../node_modules/.bun/@capgo+capacitor-appinsights@file+../node_modules/@capgo/capacitor-appinsights")
    ],
    targets: [
        .target(
            name: "CapApp-SPM",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "CapgoCapacitorAndroidUsagestatsmanager", package: "CapgoCapacitorAndroidUsagestatsmanager"),
                .product(name: "CapacitorAppinsights", package: "CapacitorAppinsights")
            ]
        )
    ]
)
