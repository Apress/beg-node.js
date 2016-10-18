var fs = require('fs');

function loadJSONSync(filename) {
    return JSON.parse(fs.readFileSync(filename));
}

// good json file 
console.log(loadJSONSync('good.json'));

// non-existent json file
try {
    console.log(loadJSONSync('absent.json'));
}
catch (err) {
    console.log('absent.json error', err.message);
}

// invalid json file
try {
    console.log(loadJSONSync('bad.json'));
}
catch (err) {
    console.log('bad.json error', err.message);
}