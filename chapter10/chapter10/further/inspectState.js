var Q = require('q');

var p1 = Q.defer().promise; // pending 
var p2 = Q.when('fulfill'); // fulfilled 
var p3 = Q.reject(new Error('reject')); // rejected

process.nextTick(function () {
    console.log(p1.isPending()); // true
    console.log(p2.isFulfilled()); // true
    console.log(p3.isRejected()); // true

    console.log(p1.inspect()); // { state: 'pending' }
    console.log(p2.inspect()); // { state: 'fulfilled', value: 'fulfill' }
    console.log(p3.inspect()); // { state: 'rejected', reason: [Error: reject] }
});
