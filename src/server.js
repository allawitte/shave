'use strict';
var app = {};
var validateUser = require('./modules/validate-user');
app.post = function (route, user) {
    return validateUser(user);    
};
module.exports = app;

/**
 * Created by HP on 4/9/2017.
 */
