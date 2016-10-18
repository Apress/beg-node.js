var stream = require('stream');
var EventEmitter = require('events').EventEmitter;

console.log(new stream.Stream() instanceof EventEmitter); // true

console.log(new stream.Readable({}) instanceof stream.Stream); // true
console.log(new stream.Writable({}) instanceof stream.Stream); // true
console.log(new stream.Duplex({}) instanceof stream.Stream); // true
console.log(new stream.Transform({}) instanceof stream.Stream); // true
