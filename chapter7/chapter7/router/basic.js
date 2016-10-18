var express = require('express');
var bodyParser = require('body-parser');

// An in memory collection of items
var items = [];

// Create a router
var router = express.Router();
router.use(bodyParser());

// Setup the collection routes
router.route('/')
      .get(function (req, res, next) {
          res.send({
              status: 'Items found',
              items: items
          });
      })
      .post(function (req, res, next) {
          items.push(req.body);
          res.send({
              status: 'Item added',
              itemId: items.length - 1
          });
      })
      .put(function (req, res, next) {
          items = req.body;
          res.send({ status: 'Items replaced' });
      })
      .delete(function (req, res, next) {
          items = [];
          res.send({ status: 'Items cleared' });
      });

// Setup the item routes
router.route('/:id')
    .get(function (req, res, next) {
        var id = req.params['id'];
        if (id && items[Number(id)]) {
            res.send({
                status: 'Item found',
                item: items[Number(id)]
            });
        }
        else {
            res.send(404, { status: 'Not found' });
        }
    })
    .all(function (req, res, next) {
        res.send(501, { status: 'Not implemented' });
    });

// Use the router
var app = express()
            .use('/todo', router)
            .listen(3000);