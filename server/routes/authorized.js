const express = require("express");
const router = express.Router();
const Car = require("../model/Car");
const uuid = require('uuid');

router.use('/', function (req, res, next){
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
})

// <----- CARS ----->
router.post('/cars', async function(req, res, next) {
    try {
        console.log(req.body)
        const { carDetails } = req.body;

        const newCar = await Car.create({
            _id: uuid.v4(),
            model: carDetails.model,
            description: carDetails.description,
            transmission: carDetails.transmission,
            fuel: carDetails.fuel,
            price: carDetails.price,
            year: carDetails.year,
            color: carDetails.color,
            img: carDetails.img
        });

        res.json(newCar);
    } catch (error) {
        res.status(500).json({ message: error.message });
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