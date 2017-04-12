'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shipmentSchema = Schema({
    userId: String,
    articl: String,
    data: Date
},{collection: 'shipments'});

var Shipment = mongoose.model('shipments', shipmentSchema);
module.exports = Shipment;
/**
 * Created by HP on 4/11/2017.
 */
