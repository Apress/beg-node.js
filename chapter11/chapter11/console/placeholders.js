// %d and %s
var name = 'nate';
var money = 33;
console.log('%s has %d dollars', name, money); // nate has 33 dollars

// %j 
var foo = {
    answer: 42
};
console.log(foo); // { answer: 42 }
console.log('%j', foo); // {"answer":42}

// %
console.log('% %%'); // % %
console.log('%d', 1); // 1
console.log('%%d', 1); // %d 1