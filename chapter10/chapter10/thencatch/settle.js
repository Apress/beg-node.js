var Q = require('q');

var willFulfillDeferred = Q.defer();
var willFulfill = willFulfillDeferred.promise;
willFulfillDeferred.resolve('final value');

willFulfill
    .then(function (val) {
        console.log('success with', val); // Only fulfill handler is called
    })
    .catch(function (reason) {
        console.log('failed with', reason);
    });

var willRejectDeferred = Q.defer();
var willReject = willRejectDeferred.promise;
willRejectDeferred.reject(new Error('rejection reason')); // Note the use of Error

willReject
    .then(function (val) {
        console.log('success with', val);
    })
    .catch(function (reason) {
        console.log('failed with', reason); // Only reject handler is called
    });


