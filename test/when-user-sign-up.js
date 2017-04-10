'use strict';
var assert = require('chai').assert;
const server = require('../src/server');
suite('When user sign up', function() {
    suite(' with empty input', function () {
        test('- returns error', function () {
            let userCredentials = {};
            let result = server.post('/register/', userCredentials);
            assert.equal(result, 'error');
        });
    });
});
/**
 * Created by HP on 4/9/2017.
 */
