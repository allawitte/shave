'use strict';
var app = {};
app.post = function (route, user) {
    if (isUserEmpty(user)) {
        return 'error';
    }
    if (isUserDataNotEmpty(user)) {
        if(isUserEmailValid(user.email) && isUserPasswordValid(user.password)){
            return 'success';
        }
        else {
            return 'wrong email or password';
        }
    }
    else {
        return 'error';
    }

    function isEmailAndPasswordInUser(user) {
        return 'email' in user && 'password' in user;
    }

    function isUserDataNotEmpty(user) {
        if (isEmailAndPasswordInUser(user)) {
            if (user.email != undefined && user.email != '' && user.password != undefined && user.password != '') {
                return true;
            }

        }
    }

    function isUserPasswordValid(password) {
        var validity = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i);
        if(Array.isArray(validity)){
            if(validity['index'] == 0){
                return true;
            }
        }
        return false;
    }

    function isUserEmailValid(email) {
        var validity = email.match(/.+@.+\..+/i);
        if (Array.isArray(validity)) {
            if (validity['index'] == 0) {
                return true;
            }
        }
        return false;
    }

    function isUserEmpty(user) {
        return !Object.keys(user).length;
    }
};
module.exports = app;

/**
 * Created by HP on 4/9/2017.
 */
