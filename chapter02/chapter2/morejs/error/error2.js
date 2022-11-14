try {
    setTimeout(function () {
        console.log('About to throw an error');
        throw new Error('Error thrown');
    }, 1000);
}
catch (e) {
    console.log('I will never execute!');
}

console.log('I am outside the try block');