var Q = require('Q');

Q.when(Q.when('foo')).then(function (val) {
    console.log(val); // foo
});

var def = Q.defer();
def.resolve(Q.when('foo'));
def.promise.then(function (val) {
    console.log(val); // foo
});

Q.when(null).then(function () {
    return Q.when('foo');
})
.then(function (val) {
    console.log(val); // foo
});