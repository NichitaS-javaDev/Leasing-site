const express = require("express");
const router = express.Router();
const Car = require("../model/Car");

router.use('/', function (req, res, next){
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
})

router.delete('/cars/:id', async function(req, res, next) {
    const {id} = req.params;
    try {
        const cars = await Car.deleteOne({'_id':id})
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router