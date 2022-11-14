var express = require('express');
var expressSession = require('express-session');

var MongoStore = require('connect-mongo')(expressSession);
var sessionStore = new MongoStore({
    host: '127.0.0.1',
    port: '27017',
    db: 'session',
});

var app = express()
    .use(expressSession({
        secret: 'my super secret sign key',
        store: sessionStore
    }))
    .use('/home', function (req, res) {
        if (req.session.views) {
            req.session.views++;
        }
        else {
            req.session.views = 1;
        }
        res.end('Total views for you: ' + req.session.views);
    })
    .use('/reset', function (req, res) {
        delete req.session.views;
        res.end('Cleared all your views');
    })
    .listen(3000);
