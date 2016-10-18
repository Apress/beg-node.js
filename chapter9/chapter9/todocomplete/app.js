var express = require('express');
var bodyParser = require('body-parser');

// The express app
var app = express();

// Create a mongodb connection 
// and only start express listening once the connection is okay
var mongodb = require('mongodb');
var db, itemsCollection;
mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/demo', function (err, database) {
    if (err) throw err;

    // Connected!
    db = database;
    itemsCollection = db.collection('items');

    app.listen(3000);
    console.log('Listening on port 3000');
});

// Create a router that can accept JSON
var router = express.Router();
router.use(bodyParser.json());

// Setup the collection routes
router.route('/')
      .get(function (req, res, next) {
          itemsCollection.find().toArray(function (err, docs) {
              res.send({
                  status: 'Items found',
                  items: docs
              });
          });
      })
      .post(function (req, res, next) {
          var item = req.body;
          itemsCollection.insert(item, function (err, docs) {
              res.send({
                  status: 'Item added',
                  itemId: item._id
              });
          });
      })

// Setup the item routes
router.route('/:id')
      .delete(function (req, res, next) {
          var id = req.params['id'];
          var lookup = { _id: new mongodb.ObjectID(id) };
          itemsCollection.remove(lookup, function (err, results) {
              res.send({ status: 'Item cleared' });
          });
      });

app.use(express.static(__dirname + '/public'))
   .use('/todo', router);

