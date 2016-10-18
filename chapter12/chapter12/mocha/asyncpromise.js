var Q = require('q');

describe('our test suite', function () {

    it('this should pass', function () {
        return Q.when('pass');
    });

    it('this should fail', function () {
        return Q.reject(new Error('fail'));
    });

});