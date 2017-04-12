'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subscriptionSchema = Schema({
    userId: String,
    articl: String,
    data: Date,
    delivery: Array,
    active: Boolean
},{collection: 'subscriptions'});

var Subscription = mongoose.model('subscriptions', subscriptionSchema);
module.exports = Subscription;
/**
 * Created by HP on 4/11/2017.
 */
