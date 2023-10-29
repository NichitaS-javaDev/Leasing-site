const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    _id: String,
    city: String,
    sector: String,
    surface: String,
    rooms: String,
    condition: String,
    description: String,
    price: Number,
    img: String
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;