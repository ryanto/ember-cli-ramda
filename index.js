/* jshint node: true */
'use strict';
var path = require('path');
var fs = require('fs');

module.exports = {
  name: 'ember-cli-ramda',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function included(app) {
    app.import('bower_components/ramda/ramda.js');

    var shim = 'vendor/ember-cli-ramda/addon/ramda-shim.js';

    fs.exists(shim, function(exists) {
      if (exists) {
        app.import(shim);
      }
    });
  }
};
