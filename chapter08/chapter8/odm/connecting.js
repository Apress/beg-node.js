var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/demo');

var db = mongoose.connection;
db.on('error', function (err) { throw err });
db.once('open', function callback() {
    console.log('connected!');
    db.close();
});