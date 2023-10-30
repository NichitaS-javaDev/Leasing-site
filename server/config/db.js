const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/leasingSite')
    .then(()=>{
        console.info(":: MongoDB connected")
    },()=>{
        console.error("MongoDB connection error")
    });

const db = mongoose.connection;

module.exports = db;
