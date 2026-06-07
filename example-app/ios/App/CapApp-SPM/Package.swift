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
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", exact: "8.3.3"),
        .package(name: "CapgoCapacitorAndroidUsagestatsmanager", path: "../../../node_modules/.bun/@capgo+capacitor-android-usagestatsmanager@8.0.26+73a76fe9b2b73c4e/node_modules/@capgo/capacitor-android-usagestatsmanager"),
        .package(name: "CapgoCapacitorAppinsights", path: "../../../node_modules/.bun/@capgo+capacitor-appinsights@file+../node_modules/@capgo/capacitor-appinsights"),
        .package(name: "CapgoCapacitorUpdater", path: "../../../node_modules/.bun/@capgo+capacitor-updater@8.47.10+73a76fe9b2b73c4e/node_modules/@capgo/capacitor-updater")
    ],
    targets: [
        .target(
            name: "CapApp-SPM",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "CapgoCapacitorAndroidUsagestatsmanager", package: "CapgoCapacitorAndroidUsagestatsmanager"),
                .product(name: "CapgoCapacitorAppinsights", package: "CapgoCapacitorAppinsights"),
                .product(name: "CapgoCapacitorUpdater", package: "CapgoCapacitorUpdater")
            ]
        )
    ]
)
