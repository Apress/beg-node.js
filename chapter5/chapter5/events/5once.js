var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.once('foo', function () {
    console.log('foo has been raised');
});

// Emit twice
emitter.emit('foo');
emitter.emit('foo');
