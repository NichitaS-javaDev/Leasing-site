const express = require("express");
const router = express.Router();
const Car = require("../model/Car");
const uuid = require('uuid');
const Apartment = require("../model/Apartment");

router.use('/', function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }
})

// <----- CARS ----->
router.post('/cars', async function (req, res, next) {
    try {
        const {carDetails} = req.body;

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
        res.status(500).json({message: error.message});
    }
})

router.delete('/cars/:id', async function (req, res, next) {
    const {id} = req.params;
    try {
        const car = await Car.deleteOne({'_id': id})
        res.json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


// <----- APARTMENTS ----->
router.post('/apartments', async function (req, res, next) {
    try {
        const {apartmentDetails} = req.body;

        const newApartment = await Apartment.create({
            _id: uuid.v4(),
            city: apartmentDetails.city,
            sector: apartmentDetails.sector,
            surface: apartmentDetails.surface,
            rooms: apartmentDetails.rooms,
            condition: apartmentDetails.condition,
            description: apartmentDetails.description,
            price: apartmentDetails.price,
            img: apartmentDetails.img
        });

        res.json(newApartment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.delete('/apartments/:id', async function (req, res, next) {
    const {id} = req.params;
    try {
        const apartment = await Apartment.deleteOne({'_id': id})
        res.json(apartment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router