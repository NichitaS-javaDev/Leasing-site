const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    _id: String,
    name: String,
    surname: String,
    tel: String,
    email: String,
    birthday: String,
    nationality: String,
    gender: String,
    employer: String,
    function: String,
    avgSalary: Number,
    passport: String,
    profileStatus: String,
    username: String
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;