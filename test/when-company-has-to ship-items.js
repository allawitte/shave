'use strict';
var assert = require('chai').assert;
var sinon = require('sinon');
var checkDeliveryDate = require('../src/modules/check-delivery-date');
var today = new Date('01/01/1980');
var clock;
suite('When company has to ship items', function () {
    beforeEach(function(){
        clock = sinon.useFakeTimers(today.getTime());
    });
    afterEach(function(){
        clock.restore();
    });
    test('- checks if today is 1-st day of a month', function () {
        var today = clock.now;
        let isShipmentDay = checkDeliveryDate(today);
        assert.equal(isShipmentDay, true);
    });
});
/**
 * Created by HP on 4/15/2017.
 */
