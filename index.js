var Fuse = require('fuse.js');

var fuzzyFilter = function(value, options) {
  if (!value) {
    return function() {
      return true;
    }
  }
  if (!options) {
    options = {};
  }
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
    if (typeof val === 'object') {
      var idValues = val;
      options.id.split('.').forEach(key => (idValues = idValues[key]))
      if (Array.isArray(idValues)) {
        var temp = idValues.reduce((prev, idValue) => (result.indexOf(idValue) !== -1 || prev), false)
        return temp;
      }
      return result.indexOf(idValues) !== -1;
    }
    return result.indexOf(key) !== -1;
  };
}

module.exports = fuzzyFilter;