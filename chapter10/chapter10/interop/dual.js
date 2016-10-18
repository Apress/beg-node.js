var Q = require('q');
var fs = require('fs');
var readFileAsync = Q.nbind(fs.readFile);

function loadJSONAsync(filename, callback) {
    return readFileAsync(filename)
                .then(JSON.parse)
                .nodeify(callback);
}

// Use as a promise
loadJSONAsync('good.json').then(function (val) {
    console.log(val);
});

// Use with a callback 
loadJSONAsync('good.json', function (err, val) {
    console.log(val);
});
