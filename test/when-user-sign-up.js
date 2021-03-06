'use strict';
var assert = require('chai').assert;
const validateUser = require('../src/modules/validate-user');
suite('When user sign up', function () {
    suite(' with empty input', function () {
        test('- returns error', function () {
            let userCredentials = {};
            let result = validateUser(userCredentials);
            assert.equal(result, 'error');
        });
    });

    suite(' with email and password', function () {
        test(' - returns success', function () {
            let userCredentials = {
                email: 'test@test.com',
                password: '12ab!*'
            };
            let result = validateUser(userCredentials);
            assert.equal(result, 'success');
        });
    });

    suite(' with invalid email and password', function () {
        test(' -returns error', function () {
            let userCredentials = {
                email: 'test@test',
                password: '12'
            };
            let result = validateUser(userCredentials);
            assert.equal(result, 'wrong email or password');
        })
    });
});
/**
 * Created by HP on 4/9/2017.
 */
