var foo1 = function namedFunction() { // no use of name, just wasted characters
    console.log('foo1');
}
foo1(); // foo1

var foo2 = function () { // no function name given i.e. anonymous function
    console.log('foo2');
}
foo2(); // foo2
