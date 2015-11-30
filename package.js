Package.describe({
  name: 'meteor-wkwebview',
  version: '0.1.5',
  summary: 'Use the significantly better and faster WKWebView in mobile apps on iOS 8+. port from https://github.com/serviewcare/meteor-wkwebview/',
  git: 'https://github.com/dmolin/meteor-wkwebview.git',
  documentation: 'README.md'
});

Cordova.depends({
  'com.telerik.plugins.wkwebview': 'https://github.com/dmolin/WKWebview.git#091f0ed9e68e41271451d7d9e5eb633c7c163077'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['practicalmeteor:loglevel@1.2.0_1']);
  api.addFiles('wkwebview.js');
});
