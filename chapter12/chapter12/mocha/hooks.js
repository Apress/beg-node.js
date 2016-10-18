var assert = require("assert");

describe('our test suite', function () {

    var testExecuting = 0;
    beforeEach(function () {
        testExecuting++;
    });

    it('test 1', function () {
        assert.equal(1, 1, 'This should be test 1');
    });

    it('test 2', function () {
        assert.equal(2, 2, 'This should be test 2');
    });
});