describe('our test suite', function () {

    it('this should pass', function (done) {
        setTimeout(function () {
            done(); // same as done(null);
        }, 500);
    });

    it('this should fail', function (done) {
        setTimeout(function () {
            done(new Error('fail'));
        }, 500);
    });

});