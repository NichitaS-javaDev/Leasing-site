const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    _id: String,
    model: String,
    description: String,
    transmission: String,
    fuel: String,
    price: Number,
    year: String,
    color: String,
    img: String
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;