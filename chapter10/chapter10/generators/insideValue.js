function* generator(){
    var bar = yield 'foo';
    console.log(bar); // bar!
}

var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value); // foo
// Resume execution injecting bar
var nextThing = iterator.next('bar');

