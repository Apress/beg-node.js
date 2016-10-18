var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lastName: 'Smith' };
var findKey = { name: 'John' };

MongoClient.connect('mongodb://127.0.0.1:27017/demo', function (err, db) {
    if (err) throw err;

    var collection = db.collection('people');

    collection.insert(demoPerson, function (err, docs) {

        demoPerson.lastName = 'Martin';
        collection.save(demoPerson, function (err) {
            console.log('Updated');
            collection.find(findKey).toArray(function (err, results) {
                console.log(results);

                // cleanup
                collection.drop(function () { db.close() });
            });
        });
    });
});