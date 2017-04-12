'use strict';
var deliveryToUser = function(subscription){
    subscription.delivery = Array.from(subscription.delivery);
    if(subscription.active){
        subscription.delivery.push(new Date());
    }
    return subscription;
};
module.exports = deliveryToUser;
/**
 * Created by HP on 4/12/2017.
 */
