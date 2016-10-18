var foo = {
    bar: 123,
    bas: function (cb) {
        cb(null, this.bar);
    }
};

var Q = require('q');
var basAsync = Q.nbind(foo.bas, foo);

basAsync().then(function (val) {
    console.log(val); // 123;
});