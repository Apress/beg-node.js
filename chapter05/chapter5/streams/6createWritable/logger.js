var Writable = require('stream').Writable;
var util = require('util');

function Logger() {
    Writable.call(this);
}
util.inherits(Logger, Writable);

Logger.prototype._write = function (chunk) {
    console.log(chunk.toString());
};

// Usage, same as any other Writable stream
var logger = new Logger();

var readStream = require('fs').createReadStream('message.txt');
readStream.pipe(logger);