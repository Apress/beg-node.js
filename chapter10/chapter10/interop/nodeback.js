function data(delay, cb) {
    setTimeout(function () {
        cb(null, 'data');
    }, delay);
}

function error(delay, cb) {
    setTimeout(function () {
        cb(new Error('error'));
    }, delay);
}

// Callback style
data(1000, function (err, data) { console.log(data); });
error(1000, function (err, data) { console.log(err.message); });

// Convert to promises
var Q = require('q');
var dataAsync = Q.nbind(data);
var errorAsync = Q.nbind(error);

// Usage 
dataAsync(1000)
    .then(function (data) { console.log(data); });

errorAsync(1000)
    .then(function (data) { })
    .catch(function (err) { console.log(err.message); });