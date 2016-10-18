var Q = require('q');
var BlueBird = require('bluebird');

new BlueBird(function (resolve) { // A bluebird promise 
    resolve('foo');
})
    .then(function (val) {
        console.log(val); // foo 
        return Q.when('bar');   // A q promise 
    })
    .then(function (val) {
        console.log(val); // bar 
    });