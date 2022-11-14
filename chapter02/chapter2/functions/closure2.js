function outerFunction(arg) {
    var variableInOuterFunction = arg;
    return function () {
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction('hello closure!');

// Note the outerFunction has returned 
innerFunction(); // logs hello closure!
