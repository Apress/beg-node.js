var fs = require('fs');

function loadJSON(filename, cb) {
    fs.readFile(filename, function (err, data) {
        if (err) cb(err);
        else cb(null, JSON.parse(data));
    });
}

// load invalid json
loadJSON('bad.json', function (err, data) {
    // NEVER GETS CALLED!
    if (err) console.log('bad.json error', err.message);
    else console.log(data);
});
