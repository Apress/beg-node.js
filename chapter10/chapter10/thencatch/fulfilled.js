var Q = require('q');

Q.when(null).then(function (val) {
    console.log(val == null);  // true
});

Q.when('kung foo').then(function (val) {
    console.log(val);  // kung foo
});

console.log('I will print first because *then* is always async!');