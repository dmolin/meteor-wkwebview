Package.describe({
  name: 'silvervue:wkwebview',
  version: '0.1.3',
  summary: 'Use the significantly better and faster WKWebView in mobile apps on iOS 8+.',
  documentation: 'README.md'
});

Cordova.depends({
  // the cordova plugin built by Meteor Core team that "emulates a server" on
  // the mobile device. Serving the files and checking for the HCP updates.
  //'com.meteor.cordova-update': 'https://github.com/practicalmeteor/com.meteor.cordova-update/tarball/a7e98f27a26b727288da81dcfd8047eccb5f6036',
  'com.telerik.plugins.wkwebview': 'ssh://git@stash.silvervue.com/pub/wkwebview.git#b167ccdc8de56cdc71de35bb6524de3200337185'
});

//meteor add cordova:com.meteor.cordova-update@https://github.com/practicalmeteor/com.meteor.cordova-update/tarball/a7e98f27a26b727288da81dcfd8047eccb5f6036

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['coffeescript', 'practicalmeteor:loglevel@1.2.0_1']);

  api.addFiles('wkwebview.coffee');
});

Package.onTest(function(api) {
  api.use(['coffeescript', 'practicalmeteor:loglevel@1.2.0_1', 'tinytest', 'practicalmeteor:wkwebview']);

  api.addFiles('wkwebview-tests.coffee', 'client');
});
