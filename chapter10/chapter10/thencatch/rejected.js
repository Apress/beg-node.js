var Q = require('q');

Q.reject(new Error('denied')).catch(function (err) {
    console.log(err.message);  // denied
});
