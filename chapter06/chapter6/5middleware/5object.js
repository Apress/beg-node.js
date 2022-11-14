var echo = {
    handle: function (req, res, next) {
        req.pipe(res);
    }
};

var connect = require('connect');

connect()
    .use(echo)
    .listen(3000);

