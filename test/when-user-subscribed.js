'use strict';
var assert = require('chai').assert;
var deliveryToUser = require('../src/modules/delivery-to-user');
suite('When user is subscribed', function () {
    function copySubscription(obj){
        var copy = Object.assign({}, obj);
        copy.delivery = Array.from(obj.delivery);
        return copy;
    }
    suite(' on single shaver', function () {
        test('- delivery record is added', function () {
            let subscription = {
                "_id": "58ee6dacee03651b3cf44b4e",
                "userId": "58ec28357d44c73f2029676e",
                "articl": "01",
                "data": "2017-04-12T18:10:52.550Z",
                "active": true,
                "delivery": [],
                "__v": 0
            };
            let copy = copySubscription(subscription);
            let result = deliveryToUser(copy);
            assert.equal(result.delivery.length, subscription.delivery.length+1);
        });
    });

});
/**
 * Created by HP on 4/12/2017.
 */
