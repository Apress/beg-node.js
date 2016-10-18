// Raw
var foo = [1, 2, 3, 4];

for (i = 0; i < foo.length; i++) {
    foo[i] = foo[i] * 2;
}
console.log(foo);

// using underscore
var foo = [1, 2, 3, 4];

var _ = require('underscore');
var results = _.map(foo, function (item) { return item * 2 });
console.log(results);
