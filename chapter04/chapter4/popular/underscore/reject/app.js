var _ = require('underscore');
var odds = _.reject([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
console.log(odds); // [1, 3, 5]
