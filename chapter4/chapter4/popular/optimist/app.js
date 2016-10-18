var argv = require('optimist').argv;
delete argv['$0'];
console.log(argv);