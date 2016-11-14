/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-ramda',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function included(app) {
    app.import(app.bowerDirectory + '/ramda/dist/ramda.js');
    app.import('vendor/ember-cli-ramda/ember-cli-ramda-shim.js', {
      exports: {
        ramda: ['default']
      }
    });
  },

  treeForVendor: function() {
    return path.join(__dirname, 'client');
  }
};
