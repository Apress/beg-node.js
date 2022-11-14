var express = require('express');

var app = express()
    .use(express.static(__dirname + '/public'))
    .listen(3000);
