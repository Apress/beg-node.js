var foo = {};
var bar = {};

// A function that uses `this`
function func(val) {
    this.val = val;
}

// Force this in func to be foo
func.call(foo, 123);

// Force this in func to be bar
func.call(bar, 456);

// Verify: 
console.log(foo.val); // 123
console.log(bar.val); // 456