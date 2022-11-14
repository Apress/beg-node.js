var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('foo', function (ev) {
    console.log('subscriber 1:', ev);
    ev.handled = true;
});

emitter.on('foo', function (ev) {
    if (ev.handled) {
        console.log('event already handled');
    }
});

// Emit
emitter.emit('foo', { handled: false });
