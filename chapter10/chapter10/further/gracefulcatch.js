var Q = require('q');

function iAsync() {
    return Q.when(null).then(function () {
        var foo;
        // Simulate an uncaught exception because of a programming error
        foo.bar; // access a member on an undefined variable
    });
}

iAsync()
    .then(function () { }) // not called
    .catch(function (err) { console.log(err.message); });