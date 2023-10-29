const express = require("express");
const router = express.Router();
const Car = require("../model/Car");
const Apartment = require("../model/Apartment");
const FarmEquipment = require("../model/FarmEquipment");

router.get('/', function(req, res, next) {
    res.render('index');
});

// <----- CARS ----->
router.get('/cars', async function(req, res, next) {
    try {
        const cars = await Car.find().sort({'price':1});
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// <----- APARTMENTS ----->
router.get('/apartments', async function(req, res, next) {
    try {
        const apartments = await Apartment.find().sort({'price':1});
        res.json(apartments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// <----- FARM EQUIPMENT ----->
router.get('/farmEquipment', async function(req, res, next) {
    try {
        const farmEquipment = await FarmEquipment.find().sort({'price':1});
        res.json(farmEquipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router