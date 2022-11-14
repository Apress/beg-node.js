var express = require('express');
var compression = require('compression');

var app = express()
    .use(compression())
    .use(express.static(__dirname + '/public'))
    .listen(3000);
