var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('foo', function a() { });
emitter.on('foo', function b() { });

console.log(emitter.listeners('foo')); // [ [Function: a], [Function: b] ]