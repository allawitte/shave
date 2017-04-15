'use strict';
var deliveryToUser = require('./delivery-to-user');
var delivery = function (subscriptions) {
    let report = [];
    if (!Array.isArray(subscriptions)) {
        return false;
    }
    subscriptions.forEach(item => {
        deliveryToUser(item);
        report.push({
            userId: item.userId,
            articl: item.article,
            data: new Date()
        });
    });
    return report;
};
module.exports = delivery;
/**
 * Created by HP on 4/13/2017.
 */
