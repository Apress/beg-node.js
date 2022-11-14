var connect = require('connect');

connect()
    .use(function (req, res, next) { next('An error has occurred!') })
    .use(function (req, res, next) { res.end('I will never get called'); })
    .listen(3000);

