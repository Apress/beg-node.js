function parseJSON(req, res, next) {
    if (req.headers['content-type'] == 'application/json') {

        // Load all the data
        var readData = '';
        req.on('readable', function () {
            readData += req.read();
        });

        // Try to parse
        req.on('end', function () {
            try {
                req.body = JSON.parse(readData);
            }
            catch (e) { }
            next();
        })
    }
    else {
        next();
    }
}

var connect = require('connect');

connect()
    .use(parseJSON)
    .use(function (req, res) {
        if (req.body) {
            res.end('JSON parsed!, value of foo: '+ req.body.foo);
        }
        else {
            res.end('no JSON detected!');
        }
    })
    .listen(3000);

