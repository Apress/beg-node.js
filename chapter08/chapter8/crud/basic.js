var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lastName: 'Smith' };
var findKey = { name: 'John' };

MongoClient.connect('mongodb://127.0.0.1:27017/demo', function (err, db) {
    if (err) throw err;
    console.log('Successfully connected');

    var collection = db.collection('people');
    collection.insert(demoPerson, function (err, docs) {
        console.log('Inserted', docs[0]);
        console.log('ID:', demoPerson._id);

        collection.find(findKey).toArray(function (err, results) {
            console.log('Found results:', results);

            collection.remove(findKey, function (err, results) {
                console.log('Deleted person');

                db.close();
            });
        });
    });
});