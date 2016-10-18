var foo = {};
var bar = Object.create(foo);
console.log(bar.__proto__ === foo); // true