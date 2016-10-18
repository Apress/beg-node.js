var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// increase limit to 30
emitter.setMaxListeners(30);

// subscribe 20 times
// No warning will be printed
for (var i = 0; i < 20; i++) {
    emitter.on('foo', function () { });
}
console.log('done');