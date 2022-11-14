var foo = [];

foo.push(1); // add at the end 
console.log(foo); // prints [1]

foo.unshift(2);  // add to the top
console.log(foo); // prints [2,1]

// Arrays are zero index based: 
console.log(foo[0]); // prints 2