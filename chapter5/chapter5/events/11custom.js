var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

// Custom class 
function Foo() {
    EventEmitter.call(this);
}
inherits(Foo, EventEmitter);

// Sample member function that raises an event
Foo.prototype.connect = function () {
    this.emit('connected');
}

// Usage
var foo = new Foo();
foo.on('connected', function () {
    console.log('connected raised!');
});
foo.connect();
