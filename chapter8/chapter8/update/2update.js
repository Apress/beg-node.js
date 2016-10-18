var MongoClient = require('mongodb').MongoClient;

var website = {
    url: 'http://www.google.com',
    visits: 0
};
var findKey = {
    url: 'http://www.google.com'
};

MongoClient.connect('mongodb://127.0.0.1:27017/demo', function (err, db) {
    if (err) throw err;

    var collection = db.collection('websites');

    collection.insert(website, function (err, docs) {

        var done = 0;
        function onDone(err) {
            done++;
            if (done < 4) return;

            collection.find(findKey).toArray(function (err, results) {
                console.log('Visits:', results[0].visits); // 4

                // cleanup
                collection.drop(function () { db.close() });
            });
        }

        var incrementVisits = { '$inc': { 'visits': 1 } };
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);

    });
});
