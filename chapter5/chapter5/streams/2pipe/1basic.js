var fs = require('fs');

// Create readable stream
var readableStream = fs.createReadStream('./cool.txt');

// Pipe it to out stdout
readableStream.pipe(process.stdout);
