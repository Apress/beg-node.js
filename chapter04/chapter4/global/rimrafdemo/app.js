var rimraf = require('rimraf');
rimraf('./foo', function (err) {
    if (err) console.log('Error occured:', err);
    else console.log('Directory foo deleted!');
})