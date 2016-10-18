var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Emit an error event
// Since there is no listener for this event the process terminates
emitter.emit('error', new Error('Something horrible happened'));

console.log('this line never executes');