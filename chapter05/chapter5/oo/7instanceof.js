var inherits = require('util').inherits;

function A() { }
function B() { }; inherits(B, A);
function C() { }

var b = new B();
console.log(b instanceof B); // true because b.__proto__ == B.prototype
console.log(b instanceof A); // true because b.__proto__.__proto__ == A.prototype
console.log(b instanceof C); // false 
