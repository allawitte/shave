'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subscription: Boolean
},{collection: 'users'});

var User = mongoose.model('users', userSchema);
module.exports = User;
/**
 * Created by HP on 4/10/2017.
 */
