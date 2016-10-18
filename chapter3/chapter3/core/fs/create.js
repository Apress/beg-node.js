var fs = require('fs');

// write 
fs.writeFileSync('test.txt', 'Hello fs!');

// read
console.log(fs.readFileSync('test.txt').toString());