'use strict';
var validateUser = require('./modules/validate-user');
var User = require('./modules/db/user');
var Subscription = require('./modules/db/Subscription');
var Shipment = require('./modules/db/Shipment');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.set('port', process.env.PORT || '8888');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/shave');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/register/', function(req, res){
    if(!validateUser(req.body)){
        return;
    }
    var newUser = new User({
        email: req.body.email,
        password: req.body.password,
        subscription: false
    });
    newUser.save(function(err, user){
        if(err){
            console.log('error to save a user');
            res.status(403).json('error to save a new user');
        }
        else {
            console.log('success to save a user');
            res.status(200).json(user);
        }
    });

});

app.post('/auth', function(req, res){
    User.findOne({email: req.body.email,
    password: req.body.password}, function(err, user){
        if(err){
            res.status(404).json('User is not found');
        }
        res.status(200).json(user);
    })
});

app.post('/subscribe', function(req, res){
    console.log(req.body);
   var newSubscription = new Subscription({
       userId: req.body.userId,
       articl: req.body.article,
       data: new Date(),
       delivery: [],
       active: true
   });
    console.log('server subscribe');
    newSubscription.save(function(err, subscription){
        if(err){
            console.log('error to save Subscription');
            res.status(403).json(err);
        }
        res.status(200).json(subscription);
    });
});

app.listen(app.get('port'), function () {
    console.log('Express started on port http://localhost:' + app.get('port'));
});
module.exports = app;

/**
 * Created by HP on 4/9/2017.
 */
