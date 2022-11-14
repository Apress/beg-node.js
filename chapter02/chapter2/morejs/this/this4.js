function foo() {
    this.foo = 123;
    console.log('Is this global?: ', this == global);
}

// without the new operator
foo(); // Is this global?: true
console.log(global.foo); // 123 

// with the new operator
var newFoo = new foo(); // Is this global?: false
console.log(newFoo.foo); // 123
