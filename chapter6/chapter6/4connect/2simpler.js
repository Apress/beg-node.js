var connect = require('connect');

// Create a connect dispatcher and register with http
var app = connect()
          .listen(3000);
console.log('server running on port 3000');
