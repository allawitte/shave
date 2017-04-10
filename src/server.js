'use strict';
var app = {};
app.post = function(route, user){
    if(isUserEmpty(user)){
        return 'error';
    }
    if('email' in user && 'password' in user){
        if(user.email != undefined && user.password != undefined){
            return 'success';
        }
    }

    function isUserEmpty(user){
        return !Object.keys(user).length;
    }
};
module.exports = app;

/**
 * Created by HP on 4/9/2017.
 */
