/* globals define, R */

(function() {
  var generateModule = function(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  };

  generateModule('ramda', { 'default': R });
})();
