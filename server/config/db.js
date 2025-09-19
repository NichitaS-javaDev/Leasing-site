const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() =>
        console.info(":: MongoDB connected"))
    .catch(err =>
        console.error(":: MongoDB connection error:", err));

const db = mongoose.connection;

module.exports = db;
