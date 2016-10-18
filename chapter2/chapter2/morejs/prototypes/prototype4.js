// Lets create a test function and set a member on its prototype
function foo() { };
foo.prototype.bar = 123;

// Lets create two instances
var bas = new foo();
var qux = new foo();

// Overwrite the prototype value for bas
bas.bar = 456;
console.log(bas.bar); // 456 i.e. prototype not accessed

// Other objects remain unaffected
console.log(qux.bar); // 123
