'use strict';
var validateUser = require('./modules/validate-user');
var User = require('./modules/db/user');
var Subscription = require('./modules/db/Subscription');
var Shipment = require('./modules/db/Shipment');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var checkDeliveryDate = require('./modules/check-delivery-date');
var delivery = require('./modules/delivery');
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

app.get('/subscriptions/:userId', function(req, res){
    var userId = req.params.userId;
    Subscription.find({userId: userId}, function(err, subscriptions){
        if(err){
            res.status(500).json(err);
        }
        res.status(200).json(subscriptions);
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

app.put('/subscriptions/:subscriptionId', function(req, res){
    Subscription.findOneAndUpdate({
        _id: new mongoose.mongo.ObjectId(req.params.subscriptionId)
    }, {active: false}, {new: true}, function(err, subscription){
        if(err){
            res.status(500).json(err);
        }
        res.status(200).json(subscription);
    })
});

app.listen(app.get('port'), function () {
    console.log('Express started on port http://localhost:' + app.get('port'));
});
setInterval(function(){
    var today = new Date();
    if(checkDeliveryDate(today)){
        Subscription.find({active: true}, function(err, subscriptions){
            Subscription(subscriptions);
            subscriptions.forEach(item => {
                var newShipment = new Shipment({
                    userId: item.userId,
                    articl: item.article,
                    data: new Date()
                });
                newShipment.save(function(err, shipment){
                    if(err){
                        console.log(err);
                    }
                    else {
                        console.log('shipment', shipment);
                    }
                });
            });
        });
    }
}, 1000*60*60*24);
module.exports = app;

/**
 * Created by HP on 4/9/2017.
 */
