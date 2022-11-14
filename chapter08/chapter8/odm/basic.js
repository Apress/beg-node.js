var mongoose = require('mongoose');

// Define a schema
var tankSchema = new mongoose.Schema({ name: 'string', size: 'string' });
tankSchema.methods.print = function () { console.log('I am', this.name, 'the', this.size); };

// Compile it into a model
var Tank = mongoose.model('Tank', tankSchema);

mongoose.connect('mongodb://127.0.0.1:27017/demo');
var db = mongoose.connection;
db.once('open', function callback() {
    console.log('connected!');

    // Use the model
    var tony = new Tank({ name: 'tony', size: 'small' });
    tony.print(); // I am tony the small

    tony.save(function (err) {

        Tank.findOne({ name: 'tony' }).exec(function (err, tank) {

            // You get a model instance all setup and ready!
            tank.print();

            db.collection('tanks').drop(function () { db.close();})
        });
    });
});