var Q = require('q');

Q.spawn(function* (){
    // fulfilled 
    var foo = yield Q.when('foo');
    console.log(foo); // foo

    // rejected 
    try{
        yield Q.reject(new Error('bar'));
    }
    catch(err){
        console.log(err.message); // bar
    }
});