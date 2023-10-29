const mongoose = require('mongoose');

const farmEquipmentSchema = new mongoose.Schema({
    _id: String,
    model: String,
    weight: String,
    engine: String,
    fuelTank: String,
    power: String,
    payloadCapacity: String,
    price: Number,
    img: String
});

const FarmEquipment = mongoose.model('farm_equipment', farmEquipmentSchema);

module.exports = FarmEquipment;