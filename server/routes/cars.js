var express = require('express');
const Car = require("../model/Car");
var router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        const cars = await Car.find().sort({'price':1});
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;