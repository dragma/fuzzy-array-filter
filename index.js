var Fuse = require('fuse.js');

var fuzzyFilter = function(value, options = {}) {
  var defaultOptions = {
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    keys: []
  };

  var fuse = null;
  var result = null;

  return function(val, key, array) {
    if (!fuse || !result) {
      fuse = new Fuse(array, Object.assign(defaultOptions, options))
      result = fuse.search(value);
    }
    return result.indexOf(key) !== -1;
  };
}

module.exports = fuzzyFilter;