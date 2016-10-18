var assert = require("assert");

describe('our test suite', function () {

    it('should pass this test', function () {
        assert.equal(1, 1, '1 should be equal to 1');
    });

    it('should fail this test', function () {
        assert.equal(1, 0, '1 should be equal to 0');
    });

});