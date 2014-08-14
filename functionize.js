'use strict';

(function() {
  var hasRequire = typeof require !== 'undefined';

  var root = this;
  var _ = root._;

  if (typeof _ === 'undefined') {
    if (hasRequire) {
      _ = require('lodash');
    }
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = functionize;
    }
  } else {
    root.functionize = functionize;
  }

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
}).call(this);
