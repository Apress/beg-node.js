var connect = require('connect');

connect()
    .use(function (req, res, next) { next(); })
    .use(function (err, req, res, next) {
        res.end('Error occured!');
    })
    .use(function (req, res, next) { res.end('No error'); })
    .listen(3000);

