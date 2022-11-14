var express = require('express');

var app = express();
app.get('/', function (req, res) {
    res.send('nothing passed in!');
});
app.get(/^\/[0-9]+$/, function (req, res) {
    res.send('number!');
});
app.get('/*', function (req, res) {
    res.send('not a number!');
});
app.listen(3000);