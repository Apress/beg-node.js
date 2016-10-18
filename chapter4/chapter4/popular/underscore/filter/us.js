var foo = [1, 10, 50, 200, 900, 90, 40];

var _ = require('underscore');
var results = _.filter(foo, function (item) { return item > 100 });
console.log(results);
