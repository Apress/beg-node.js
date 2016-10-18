setTimeout(function () {
    console.log('5 seconds passed. Exiting');
}, 5000);
console.log('Started. Will exit in 5 seconds');

process.on('SIGINT', function () {
    console.log('Got SIGINT. Ignoring.');
});
