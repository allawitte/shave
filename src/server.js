'use strict';
var app = {};
app.post = function(route, user){
    if(isUserEmpty(user)){
        return 'error';
    }
    if(isUserDataNotEmpty(user)){
            return 'success';
    }

    function isEmailAndPasswordInUser(user){
        return 'email' in user && 'password' in user;
    }

    function isUserDataNotEmpty(user){
        if(isEmailAndPasswordInUser(user)){
            if(user.email != undefined && user.email != '' && user.password != undefined && user.password != ''){
                return true;
            }

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
