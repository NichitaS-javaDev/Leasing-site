const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
    _id: String,
    model: String,
    totalPrice: Number,
    paidAmount: Number,
    monthlyPayment: Number,
    docId: String,
    owner: String,
    status: String,
    img: String
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;