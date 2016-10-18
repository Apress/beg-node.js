var express = require('express');

var app = express();
app.param('userId', function (req, res, next, userId) {
    res.write('Looking up user: ' + userId + '\n');
    // simulate a user lookup and 
    // load it into the request object for later middleware
    req.user = { userId: userId };
    next();
});
app.get('/user/:userId', function (req, res) {
    res.end('user is: ' + JSON.stringify(req.user));
});
app.listen(3000);