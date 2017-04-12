'use strict';
var deliveryToUser = function(subscription){
    var copy = {};
    copy.delivery = Array.from(subscription.delivery);
    if(subscription.active){
        copy.delivery.push(new Date());
    }
    console.log(copy);
    console.log(subscription);
    return copy;
};
module.exports = deliveryToUser;
/**
 * Created by HP on 4/12/2017.
 */
