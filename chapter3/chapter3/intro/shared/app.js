var foo = require('./foo');
console.log('initial something:', foo.something); // 123

// Now modify something: 
foo.something = 456;

// Now load bar:
var bas = require('./bar');