var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Listener addition / removal notifications
emitter.on('removeListener', function (eventName, listenerFunction) {
    console.log(eventName, 'listener removed', listenerFunction.name);
});
emitter.on('newListener', function (eventName, listenerFunction) {
    console.log(eventName, 'listener added', listenerFunction.name);
});

function a() { }
function b() { }

// Add 
emitter.on('foo', a);
emitter.on('foo', b);

// Remove 
emitter.removeListener('foo', a);
emitter.removeListener('foo', b);
