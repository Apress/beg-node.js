var Q = require('q');

Q.when(null)
    .then(function () {
        return 'kung foo';
    })
    .then(function (val) {
        console.log(val); // kung foo
        return Q.when('panda');
    })
    .then(function (val) {
        console.log(val); // panda
        // Nothing returned 
    })
    .then(function (val) {
        console.log(val == undefined); // true
    });