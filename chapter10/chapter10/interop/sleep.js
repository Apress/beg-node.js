var Q = require('q');
function sleepAsync(ms) {
    var deferred = Q.defer();
    setTimeout(function () {
        deferred.resolve();
    }, ms);
    return deferred.promise;
}

console.time('sleep');
sleepAsync(1000).then(function () {
    console.timeEnd('sleep'); // around 1000ms
});