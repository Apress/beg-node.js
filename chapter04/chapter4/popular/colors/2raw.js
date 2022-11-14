function getRed(str) {
    // Changes the console foreground to red
    var redCode = '\x1b[31m';

    // Resets the console foreground
    var clearCode = '\x1b[39m';

    return redCode + str + clearCode;
}

console.log(getRed('Hello World!'));