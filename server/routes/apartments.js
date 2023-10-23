var express = require('express');
const Apartment = require("../model/Apartment");
var router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        const apartments = await Apartment.find().sort({'price':1});
        res.json(apartments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;