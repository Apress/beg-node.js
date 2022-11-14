var https = require('https');

var fs = require('fs');
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, function (req, res) {
    res.end('hello client!');
}).listen(3000);
