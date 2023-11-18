const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>{
        console.info(":: MongoDB connected")
    },()=>{
        console.error(":: MongoDB connection error")
    });

const db = mongoose.connection;

module.exports = db;
