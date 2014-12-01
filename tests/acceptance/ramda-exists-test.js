/* global R */
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Ramda exists');

test('it exists', function() {
  ok(!!R);
});
