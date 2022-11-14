var Foo = function () { /*Foo*/ }
var Bar = function () { /*Bar*/ }

var foo = new Foo();
console.log(foo.constructor.toString());

var bar = new Bar();
console.log(bar.constructor.toString());

Bar.prototype.__proto__ = Foo.prototype;

var bas = new Bar();
console.log(bas.constructor.toString());

console.log(Bar.prototype.constructor.toString());
