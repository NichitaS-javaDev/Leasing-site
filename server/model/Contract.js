const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
    _id: String,
    model: String,
    totalPrice: Number,
    paidAmount: Number,
    docId: String,
    img: String
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;