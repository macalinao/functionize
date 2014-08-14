'use strict';

var expect = require('chai').expect;
var functionize = require('./functionize');

describe('functionize', function() {
  it('should follow the example', function() {
    var object = {
      counter: 1,
      add: function(amt) {
        return this.counter += amt;
      }
    };

    // The normal way
    expect(object.counter).to.equal(1);
    expect(object.add(9)).to.equal(10);

    // The functionized way
    object = functionize(object, object.add);
    expect(object.counter).to.equal(10);
    expect(object(9)).to.equal(19);
    expect(object.add(1)).to.equal(20);
  });
});
