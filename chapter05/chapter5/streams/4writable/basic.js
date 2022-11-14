var fs = require('fs');
var ws = fs.createWriteStream('message.txt');

ws.write('foo bar ');
ws.end('bas');