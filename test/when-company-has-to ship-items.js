'use strict';
var oldDate = Date;
var assert = require('chai').assert;
suite('When company has to ship items', function () {
    beforeEach(function(){
        Date = function (fake)        {
            return new oldDate('01/01/1980');
        }
    });
    afterEach(function(){
        Date = oldDate;
    });
    test('- checks if today is 1-st day of a month', function () {
        let result = checkDeliveryDate();
        assert.equal(result, true);
    });
});
/**
 * Created by HP on 4/15/2017.
 */
