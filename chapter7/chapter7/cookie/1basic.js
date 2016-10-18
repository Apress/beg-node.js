var express = require('express');

var app = express()
    .use(function (req, res) {
        res.cookie('name', 'foo');
        res.end('Hello!');
    })
    .listen(3000);