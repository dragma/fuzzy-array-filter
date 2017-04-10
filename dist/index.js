'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fuse = require('fuse.js');

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!value) {
    return function () {
      return true;
    };
  }
  var defaultOptions = {
    distance: 100,
    keys: [],
    location: 0,
    maxPatternLength: 32,
    threshold: 0.4
  };

  var fuse = null;
  var result = null;

  return function (val, key, array) {
    if (!fuse || !result) {
      fuse = new _fuse2.default(array, Object.assign(defaultOptions, options));
      result = fuse.search(value);
    }
    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      var idValues = val;
      options.id.split('.').forEach(function (key) {
        return idValues = idValues[key];
      });
      if (Array.isArray(idValues)) {
        var temp = idValues.reduce(function (prev, idValue) {
          return result.indexOf(idValue) !== -1 || prev;
        }, false);
        return temp;
      }
      return result.indexOf(idValues) !== -1;
    }
    return result.indexOf(key) !== -1;
  };
};