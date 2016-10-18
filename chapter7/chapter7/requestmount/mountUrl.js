var express = require('express');

express()
    .use('/home', function (req, res, next) {
        console.log('first:', req.url); // GET /home => /
        next();
    })
    .use(function (req, res, next) {
        console.log('second:', req.url); // GET /home => /home
        next();
    })
    .listen(3000);
