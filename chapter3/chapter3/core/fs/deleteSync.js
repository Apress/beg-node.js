var fs = require('fs');
try {
    fs.unlinkSync('./test.txt');
    console.log('test.txt successfully deleted');
}
catch (err) {
    console.log('Error:', err);
}