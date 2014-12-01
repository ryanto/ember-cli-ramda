/* jshint node: true */

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('ramda', '0.8.0');
  }
};
