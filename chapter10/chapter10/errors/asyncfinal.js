var fs = require('fs');

function loadJSON(filename, cb) {
    fs.readFile(filename, function (err, data) {
        if (err) return cb(err);
        try {
            var parsed = JSON.parse(data);
        }
        catch (err) {
            return cb(err);
        }
        return cb(null, parsed);
    });
}