var util = require('util');
var name = 'nate';
var money = 33;

// prints: nate has 33 dollars
console.log(util.format('%s has %d dollars', name, money));