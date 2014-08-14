'use strict';

var _ = require('lodash');

function functionize(object, fn) {
  var ret = _.bind(fn, object);

  // Bind all properties
  _.forIn(object, function(value, key) {
    if (typeof value === 'function') {
      ret[key] = _.bind(value, object);
    } else {
      ret[key] = value;
    }
  });

  return ret;
}

if (typeof window === 'undefined' && module) {
  module.exports = functionize;
} else if (window) {
  window.functionize = functionize;
}
