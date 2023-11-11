const mongoose = require('mongoose');

const leasingRateSchema = new mongoose.Schema({
    _id: String,
    rate: Number
});

const LeasingRate = mongoose.model('leasing_rate', leasingRateSchema);

module.exports = LeasingRate;