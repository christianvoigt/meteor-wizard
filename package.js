Package.describe({
  name: 'forwarder:autoform-wizard',
  summary: 'A multi step form component for AutoForm.',
  version: '0.4.2',
  git: 'https://github.com/forwarder/meteor-wizard.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  
  api.use([
    'underscore',
    'tracker',
    'templating',
    'blaze',
    'session',
    'ejson',
    'localstorage'
  ], 'client');
  
  api.use('aldeed:autoform@3.0.0 || 4.0.0', 'client');
  
  api.addFiles([
    'wizard.html',
    'wizard.js',
    'cache.js'
  ], 'client');
});