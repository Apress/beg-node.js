var connect = require('connect');

connect()
    .use(function (req, res, next) { next(new Error('Big bad error details')); })
    .use(function (req, res, next) { res.end('I will never get called'); })
    .use(function (err, req, res, next) {
        // Log the error on the server
        console.log('Error handled:', err.message);
        console.log('Stacktrace:', err.stack);
        // inform the client 
        res.writeHead(500);
        res.end('Unable to process the request');
    })
    .listen(3000);

