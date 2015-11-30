## Quick branch from https://github.com/serviewcare/meteor-wkwebview/ for meteor 1.2 support, with added shrinkView support on IOS

Switches your meteor ios app to WKWeb​View on iOS 8+, which is significantly faster and better than the old, clunky, memory leaking UIWebView.

Since using WkWebView with Meteor 1.2, on IOS shrinkView does not bear any effect, thus resulting in the virtual keyboard overlapping the App screen without any resizing (and with an unpleasant resulting scrollbar).
This specific fork fixes that issue, pointing this package to a forked (yep!) version of WkWebView containing the fix.

## Installation

```
# If you have added cordova:com.meteor.cordova-update for previous meteor releases, you must remove it. 1.2 supports a pluggable webview in its default cordova.
It helps to rm -rf .meteor/local/cordova-build as well as build plugins iso-packs plugin-cache, etc etc.. or else it's possible you will have left
over state that may effect your project.

# This package simply includes the wkwebview cordova plugin
meteor add silvervue:wkwebview

# Loading images/resources from public will not work until you add a mobile-config.js file:


# Fixed issue loading images in initial bundle load before autoupdate.

```
