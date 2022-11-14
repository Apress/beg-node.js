process.stdin.on('readable', function () {
    var buf = process.stdin.read();
    if (buf != null) {
        console.log('Got:');
        process.stdout.write(buf.toString());
    }
    else {
        console.log('Read complete!');
    }
});