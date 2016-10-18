var Q = require('q');

function iAsync() {
    return Q.when(null).then(function () {
        var foo; foo.bar; // Programming error. Will get caught since we return the chain
    });
}

iAsync()
    .catch(function (err) {
        var foo; foo.bar; // Uncaught exception, rejects the next promise
    });
    // But no one is listening to the returned promise 