const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/leasingSite')
    .then(()=>{
        console.log(":: MongoDB connected")
    },()=>{
        console.log("MongoDB connection error")
    });

const db = mongoose.connection;

module.exports = db;
