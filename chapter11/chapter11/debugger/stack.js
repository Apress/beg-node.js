function foo(index) {
    index++;
    debugger;
    console.log(index);
}
function bar(index) {
    index++;
    foo(index);
}
var index = 0
bar(0);