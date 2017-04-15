'use strict';
var assert = require('chai').assert;
var deliveryToUser = require('../src/modules/delivery-to-user');
var delivery = require('../src/modules/delivery');
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
suite('When few user are subscribed', function () {
    test('- delivery record is added to each of them', function () {
        let subscriptions = [{
            "_id": "58ee6dacee03651b3cf44b4e",
            "userId": "58ec28357d44c73f2029676e",
            "articl": "01",
            "data": "2017-04-12T18:10:52.550Z",
            "active": true,
            "delivery": [],
            "__v": 0
        }
        ,{
                "_id": "58ee6dacee03651b3cf44b4f",
                "userId": "58ec28357d44c73f2029676f",
                "articl": "01",
                "data": "2017-04-12T18:10:52.550Z",
                "active": true,
                "delivery": [],
                "__v": 0
            }
        ,{
                "_id": "58ee6dacee03651b3cf44b4g",
                "userId": "58ec28357d44c73f2029676g",
                "articl": "01",
                "data": "2017-04-12T18:10:52.550Z",
                "active": true,
                "delivery": [],
                "__v": 0
            }];
        let result = delivery(subscriptions);
        assert.equal(result.length, subscriptions.length);
    });
});
/**
 * Created by HP on 4/12/2017.
 */
