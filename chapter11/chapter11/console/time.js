console.time();
setTimeout(function () {
    console.timeEnd(); // undefined: 501ms
}, 500);

console.time('first');
setTimeout(function () {
    console.timeEnd('first'); // first: 1001ms
}, 1000);

console.time('second');
setTimeout(function () {
    console.timeEnd('second'); // second: 2004ms
}, 2000);
