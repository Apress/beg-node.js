var Q = require('q');

function getPromise() {
    var deferred = Q.defer();

    // Resolve the promise after a second
    setTimeout(function () {
        deferred.resolve('final value');
    }, 1000);

    return deferred.promise;
}

var promise = getPromise();

promise.then(function (val) {
    console.log('done with:', val);
});
