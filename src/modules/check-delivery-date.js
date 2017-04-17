'use strict';
function checkDeliveryDate(today){
    if(new Date(today).getDate() == 1){
        return true;
    }
    return false;
}
module.exports = checkDeliveryDate;
/**
 * Created by HP on 4/16/2017.
 */
