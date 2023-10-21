var express = require('express');
const {getAllCars} = require("../controller/carController");
var router = express.Router();

router.get('/', async function(req, res, next) {
    try {
        const cars = await getAllCars(req, res);
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;