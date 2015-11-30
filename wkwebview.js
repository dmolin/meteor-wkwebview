var log = loglevel.createPackageLogger('practicalmeteor:wkwebview');

if(Meteor.isCordova) {
  Meteor.startup(function() {
    if (!window.device || window.device.platform !== 'iOS') return;

    if (window.wkwebview) {
      log.info('Success: wkwebview is the cordova web view.');
    } else {
      log.warn('Error: wkwebview is not the cordova web view.');
    }
  });
}
