# Functionize

Turns an object into an object that can be called as a function.

[![build status](https://secure.travis-ci.org/simplyianm/functionize.png)](http://travis-ci.org/simplyianm/functionize)

## Installation

This module is installed via npm:

```bash
$ npm install functionize --save
```

Or Bower:

```bash
$ bower install functionize --save
```

## Example

``` js
var functionize = require('functionize');

var object = {
  counter: 1,
  add: function(amt) {
    return this.counter += amt;
  }
};

// The normal way
console.log(object.counter); // 1
console.log(object.add(9)); // 10

// The functionized way
object = functionize(object, object.add);
console.log(object.counter); // 10
console.log(object(9)); // 19
console.log(object.add(1)); // 20 -- still works!
```

Pretty cool, eh? Take control of your objects!
