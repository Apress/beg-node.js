var foo = {};
var bar = { 'foo': foo };

// Uncustomized serialization
console.log(JSON.stringify(bar)); // {"foo":{}}

// Customize serialization
foo.toJSON = function () { return "custom" };
console.log(JSON.stringify(bar)); // {"foo":"custom"}
