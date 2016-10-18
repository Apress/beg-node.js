var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var fooHandler = function () {
    console.log('handler called');

    // Unsubscribe
    emitter.removeListener('foo',fooHandler);
};

emitter.on('foo', fooHandler);

// Emit twice
emitter.emit('foo');
emitter.emit('foo');
