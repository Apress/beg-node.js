var Q = require('q');

var deferred = Q.defer();
var promise = deferred.promise;

promise.then(function (val) {
    console.log('done with:', val);
});

deferred.resolve('final value'); // done with: final value
