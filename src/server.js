'use strict';
var app = {};
app.post = function(route, user){
    if(isUserEmpty(user)){
        return 'error';
    }

    function isUserEmpty(user){
        return !Object.keys(user).length;
    }
};
module.exports = app;

/**
 * Created by HP on 4/9/2017.
 */
