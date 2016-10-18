function Foo() { }

var foo = new Foo();
console.log(foo.constructor.name); // Foo
console.log(foo.constructor === Foo); // true