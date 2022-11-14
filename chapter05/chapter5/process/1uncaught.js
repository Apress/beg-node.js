process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
    console.log('Stack:', err.stack);
    process.exit(1);
});

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();

console.log('This line will not run.');