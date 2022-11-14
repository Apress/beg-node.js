Array.prototype.foo = 123;
Number.prototype.foo = 123;
String.prototype.foo = 123;

var arr = [];
var str = '';
var num = 1;

console.log(arr.foo); // 123
console.log(str.foo); // 123
console.log(num.foo); // 123
